import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import Anthropic from "@anthropic-ai/sdk"

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { token, formData } = body;

  console.log('token: ', token)

  if (!token) {
    return NextResponse.json({ error: "Token is required" }, { status: 400 });
  }

  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  })

  const verification = await verifyRes.json();

  console.log('verification: ', verification)

  if (!verification.success || verification.score < 0.5) {
    return NextResponse.json({ error: "Invalid reCAPTCHA token" }, { status: 400 });
  }
  
  const { name, email, phone, message } = formData;
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });

  const response = await anthropic.messages.create({
    model: "claude-3-5-haiku-20241022",
    messages: [
      { role: "user", content: `Translate the following English text to natural Korean, keeping nuance and professional tone. Output ONLY the translated text:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}` }
    ],
    max_tokens: 1000,
  });

  const translatedText = response.content[0].type === 'text' ? response.content[0].text : '';

  console.log('translatedText: ', translatedText)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n번역된 메시지: ${translatedText}`,
  };
  
  await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
}
