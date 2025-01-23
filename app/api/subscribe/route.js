import { NextResponse } from "next/server";
import { LoopsClient } from "loops";

const loops = new LoopsClient(process.env.LOOPS_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Neplatný e-mail" },
        { status: 400 }
      );
    }

    const resp = await loops.createContact(email, {
      source: "Přihlášení na webu",
    });

    return NextResponse.json({ success: resp.success });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}