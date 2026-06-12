import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const secret_key = process.env.RECAPTCHA_SECRET_KEY;

  // If reCAPTCHA secret key is not configured, skip verification and allow through
  if (!secret_key) {
    console.log('RECAPTCHA_SECRET_KEY not configured — skipping reCAPTCHA verification.');
    return NextResponse.json({
      message: "Captcha verification skipped (not configured).",
      success: true,
    });
  }

  try {
    const reqBody = await request.json();
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${reqBody.token}`;

    const res = await axios.post(url);
    if (res.data.success) {
      return NextResponse.json({
        message: "Captcha verification success!!",
        success: true,
      });
    }

    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });

  } catch (error) {
    return NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });
  }
}