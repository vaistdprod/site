import nodemailer from 'nodemailer';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';
import helmet from 'helmet';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import Cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

const cors = Cors({
  methods: ['POST', 'OPTIONS'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const rateLimiter = new RateLimiterMemory({
  points: 100,
  duration: 900,
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", 'www.google.com', 'www.gstatic.com'],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false,
  })(req, res, () => {});

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const ip =
      (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      (req.connection.socket ? req.connection.socket.remoteAddress : null);

    await rateLimiter.consume(ip);

    const { jmeno, email, potrebuji, zprava, captchaToken } = req.body;

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

    const { error, value } = schema.validate({ jmeno, email, potrebuji, zprava, captchaToken });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify`;

    const params = new URLSearchParams();
    params.append('secret', secretKey);
    params.append('response', value.captchaToken);
    params.append('remoteip', ip);

    const captchaResponse = await fetch(verificationURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed.' });
    }

    const MIN_SCORE = 0.5;
    if (captchaData.score < MIN_SCORE) {
      return res.status(400).json({ message: 'Low reCAPTCHA score. Are you a robot?' });
    }

    const expectedAction = 'contact_form_submission';
    if (captchaData.action !== expectedAction) {
      return res.status(400).json({ message: 'reCAPTCHA action mismatch.' });
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
        <p>Děkujeme vám za vaši zprávu. Ta byla úspěšně doručena a my se vám na ni co nejdříve ozveme zpět.</p>
        <p><strong>Vaše zpráva:</strong></p>
        <p>${sanitizedZprava.replace(/\n/g, '<br>')}</p>
        <p>S pozdravem</p>
        <p>TD Productions</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return res.status(200).json({ message: 'Zpráva úspěšně odeslána.' });
  } catch (error) {
    if (error instanceof RateLimiterMemory.RateLimiterRes) {
      return res.status(429).json({
        message: 'Příliš mnoho požadavků, zkuste to prosím později.',
      });
    }
    console.error('Chyba při odesílání emailů:', error);
    return res.status(500).json({ message: 'Chyba při odesílání emailů.' });
  }
}
