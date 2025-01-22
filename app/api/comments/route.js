import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import dotenv from 'dotenv';
dotenv.config();

const rateLimiter = new RateLimiterMemory({
  points: 100,
  duration: 900,
});

export async function POST(request) {
  if (request.method !== 'POST') {
    // In Next 13 App Router, checking request.method is optional because
    // “POST” is already declared in the function name, but we’ll do it anyway
    return NextResponse.json({ message: 'Metoda nepovolena' }, { status: 405 });
  }

  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',').pop()?.trim() ||
      request.headers.get('x-real-ip') ||
      '';

    await rateLimiter.consume(ip);

    const body = await request.json();
    const { jmeno, email, potrebuji, zprava, captchaToken } = body;

    const schema = Joi.object({
      jmeno: Joi.string().min(2).max(100).required(),
      email: Joi.string().email().required(),
      potrebuji: Joi.array()
        .items(
          Joi.string().valid(
            'Webovými stránkami',
            'Aplikací na míru',
            'Marketingem',
            'Umělou inteligencí',
            'Fotoprodukcí / videoprodukcí'
          )
        )
        .optional(),
      zprava: Joi.string().min(10).max(1000).required(),
      captchaToken: Joi.string().required(),
    });

    const { error, value } = schema.validate({
      jmeno,
      email,
      potrebuji,
      zprava,
      captchaToken,
    });

    if (error) {
      return NextResponse.json({ message: error.details[0].message }, { status: 400 });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';

    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', value.captchaToken);
    params.append('remoteip', ip);

    const captchaResponse = await fetch(verificationURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const captchaData = await captchaResponse.json();
    if (!captchaData.success) {
      return NextResponse.json({ message: 'Ověření reCAPTCHA selhalo.' }, { status: 400 });
    }

    const MIN_SCORE = 0.5;
    if (captchaData.score < MIN_SCORE) {
      return NextResponse.json({ message: 'Nízké reCAPTCHA skóre. Jste robot?' }, { status: 400 });
    }

    const expectedAction = 'contact_form_submission';
    if (captchaData.action !== expectedAction) {
      return NextResponse.json({ message: 'Neshoda v reCAPTCHA.' }, { status: 400 });
    }

    const sanitizedJmeno = sanitizeHtml(value.jmeno);
    const sanitizedEmail = sanitizeHtml(value.email);
    const sanitizedZprava = sanitizeHtml(value.zprava);

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    });

    const adminMailOptions = {
      from: `"${sanitizedJmeno}" <${sanitizedEmail}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'Nová zpráva z formuláře',
      html: `
        <p><strong>Jméno:</strong> ${sanitizedJmeno}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Potřebuji pomoct s:</strong> ${
          value.potrebuji ? value.potrebuji.join(', ') : 'N/A'
        }</p>
        <p><strong>Zpráva:</strong></p>
        <p>${sanitizedZprava.replace(/\n/g, '<br>')}</p>
      `,
    };

    const userMailOptions = {
      from: `"TD Productions" <${process.env.EMAIL_USER}>`,
      to: sanitizedEmail,
      subject: 'Potvrzení o přijetí vaší zprávy',
      html: `
        <p>Dobrý den ${sanitizedJmeno},</p>
        <p>Děkujeme vám za vaši zprávu. Ta byla úspěšně doručena a my vám na ni co nejdříve odpovíme.</p>
        <p><strong>vaše zpráva:</strong></p>
        <p>${sanitizedZprava.replace(/\n/g, '<br>')}</p>
        <p>S pozdravem</p>
        <p>TD Productions</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Zpráva úspěšně odeslána.' }, { status: 200 });
  } catch (error) {
    if (error instanceof RateLimiterMemory.RateLimiterRes) {
      return NextResponse.json(
        {
          message: 'Příliš mnoho požadavků, zkuste to prosím později.',
        },
        { status: 429 }
      );
    }
    console.error('Chyba při odesílání emailů:', error);
    return NextResponse.json({ message: 'Chyba při odesílání emailů.' }, { status: 500 });
  }
}
