import { NextRequest, NextResponse } from "next/server"

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
  
  
  
}
