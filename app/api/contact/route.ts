import { NextResponse } from "next/server";
import Joi from "joi";
import sanitizeHtml from "sanitize-html";
import { RateLimiterMemory } from "rate-limiter-flexible";
import { LoopsClient } from "loops";
import dotenv from "dotenv";
dotenv.config();

// Initialize the Loops client with your API key
const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);

const rateLimiter = new RateLimiterMemory({
  points: 100,
  duration: 900,
});

export async function POST(request: Request) {
  if (request.method !== "POST") {
    return NextResponse.json(
      { message: "Metoda nepovolena" },
      { status: 405 }
    );
  }

  try {
    // Determine client IP for rate limiting
    const ip =
      request.headers
        .get("x-forwarded-for")
        ?.split(",")
        .pop()
        ?.trim() ||
      request.headers.get("x-real-ip") ||
      "";

    await rateLimiter.consume(ip);

    // Parse the JSON body from the request
    const body = await request.json();
    const { jmeno, email, potrebuji, zprava } = body;

    // Validate the payload using Joi
    const schema = Joi.object({
      jmeno: Joi.string().min(2).max(100).required(),
      email: Joi.string().email().required(),
      potrebuji: Joi.array()
        .items(
          Joi.string().valid(
            "Webovými stránkami",
            "Aplikací na míru",
            "Marketingem",
            "Umělou inteligencí",
            "Fotoprodukcí / videoprodukcí"
          )
        )
        .optional(),
      zprava: Joi.string().min(10).max(1000).required(),
    });

    const { error, value } = schema.validate({ jmeno, email, potrebuji, zprava });
    if (error) {
      return NextResponse.json(
        { message: error.details[0].message },
        { status: 400 }
      );
    }

    // Sanitize the input fields
    const sanitizedJmeno = sanitizeHtml(value.jmeno);
    const sanitizedEmail = sanitizeHtml(value.email);
    const sanitizedZprava = sanitizeHtml(value.zprava);

    // Build the payload for the sender (client)
    const userPayload = {
      transactionalId: process.env.LOOPS_USER_TEMPLATE, // e.g., "LOOPS_USER_TEMPLATE"
      email: sanitizedEmail,
      dataVariables: {
        sanitizedJmeno: sanitizedJmeno,
        sanitizedZprava: sanitizedZprava,
      },
    };

    // Build the payload for the site owner (admin)
    const adminPayload = {
      transactionalId: process.env.LOOPS_ADMIN_TEMPLATE, // e.g., "LOOPS_ADMIN_TEMPLATE"
      email: process.env.LOOPS_ADMIN_EMAIL, // Site owner's email
      dataVariables: {
        sanitizedJmeno: sanitizedJmeno,
        sanitizedEmail: sanitizedEmail,
        sanitizedZprava: sanitizedZprava,
      },
    };

    // Send transactional email to the sender (client)
    await loops.sendTransactionalEmail(userPayload as { transactionalId: string; email: string; addToAudience?: boolean | undefined; dataVariables?: any; attachments?: any; });
    // Send transactional email to the admin (site owner)
    await loops.sendTransactionalEmail(adminPayload as { transactionalId: string; email: string; addToAudience?: boolean | undefined; dataVariables?: any; attachments?: any; });

    return NextResponse.json(
      { message: "Zpráva úspěšně odeslána." },
      { status: 200 }
    );
  } catch (error: any) {
    // Instead of using instanceof (which fails), we check for a property typical of rate limiter errors.
    if (error && typeof error.msBeforeNext !== "undefined") {
      return NextResponse.json({
        message: "Příliš mnoho požadavků, zkuste to prosím později.",
      }, { status: 429 });
    }
    console.error("Chyba při odesílání emailů:", error);
    return NextResponse.json({ message: "Chyba při odesílání emailů." }, { status: 500 });
  }
}
