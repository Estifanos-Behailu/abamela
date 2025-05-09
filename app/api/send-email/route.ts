import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, jobRoles, country, message } = body;

    // Validate input
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    // Create a transporter - you'll need to replace these with actual credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Job Roles Needed:</strong> ${jobRoles || 'Not specified'}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Abamela Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || 'abamelaagency2011@gmail.com',
      subject: `New Contact Form: ${name} from ${company}`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email, please try again later' },
      { status: 500 }
    );
  }
} 
