import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to send a message via Telegram (optional)
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
}

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer (optional)
async function sendEmail(payload, message) {
  const emailAddress = process.env.EMAIL_ADDRESS;
  const gmailPasskey = process.env.GMAIL_PASSKEY;

  // Skip email sending if credentials are not configured
  if (!emailAddress || !gmailPasskey) {
    console.log('Email credentials not configured — skipping email notification.');
    return false;
  }

  // Create transporter inside function to avoid module-level errors
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: emailAddress,
      pass: gmailPasskey,
    },
  });

  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: 'Portfolio',
    to: emailAddress,
    subject: `New Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    // Validate required form fields
    if (!name || !email || !userMessage) {
      return NextResponse.json({
        success: false,
        message: 'All fields are required.',
      }, { status: 400 });
    }

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Telegram notification — only attempted if credentials are configured
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    if (token && chat_id) {
      const telegramSuccess = await sendTelegramMessage(token, chat_id, message);
      if (!telegramSuccess) {
        console.warn('Telegram notification failed.');
      }
    } else {
      console.log('Telegram credentials not configured — skipping Telegram notification.');
    }

    // Email notification — only attempted if credentials are configured
    await sendEmail(payload, message);

    // Always return success to the user as long as the form data is valid.
    // Notification delivery is best-effort and does not affect the response.
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { status: 500 });
  }
}