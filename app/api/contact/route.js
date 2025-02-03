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
    return NextResponse.json({ message: 'Metoda nepovolena' }, { status: 405 });
  }

  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',').pop()?.trim() ||
      request.headers.get('x-real-ip') ||
      '';

    await rateLimiter.consume(ip);

    const body = await request.json();
    const { jmeno, email, potrebuji, zprava } = body;

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
    });

    const { error, value } = schema.validate({
      jmeno,
      email,
      potrebuji,
      zprava,
    });

    if (error) {
      return NextResponse.json({ message: error.details[0].message }, { status: 400 });
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
        <p>Děkujeme vám za vaši zprávu. Co nejdříve se vám ozveme zpátky.</p>
        <p><strong>Vaše zpráva:</strong></p>
        <p>${sanitizedZprava.replace(/\n/g, '<br>')}</p>
        <p>S pozdravem</p>
        <p>Tým TD Productions</p>
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