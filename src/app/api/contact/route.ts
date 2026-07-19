import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to escape HTML special characters to prevent injection attacks in HTML emails
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // 1. Strict Validation Check
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // 2. Validate email structure
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    // Sanitize user inputs for safety in html layout templates
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || 'N/A');
    const safeMessage = escapeHtml(message);

    // 3. SMTP Email Notification (Configured only via environment variables for security)
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"OptiVir Ads Form" <${smtpUser}>`,
        to: process.env.CONTACT_TO || 'optivirads@gmail.com',
        subject: `New Contact Submission from ${safeName}`,
        text: `
Name: ${name}
Email: ${email}
Company/URL: ${company || 'N/A'}

Message:
${message}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #00f2fe; border-bottom: 2px solid #00f2fe; padding-bottom: 10px;">New Contact Submission</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Company/URL:</strong> ${safeCompany}</p>
            <br />
            <h3 style="color: #8b5cf6;">Message:</h3>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; border-left: 4px solid #8b5cf6; white-space: pre-wrap;">${safeMessage}</div>
          </div>
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('SMTP Email sending failed:', emailError);
        // Continue to attempt Google Sheet submission
      }
    } else {
      console.warn('SMTP credentials are not fully configured. Email notifications skipped.');
    }

    // 4. Google Sheet Delivery via Apps Script Web App
    const sheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;
    if (sheetUrl) {
      try {
        await fetch(sheetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            company,
            message,
          }),
        });
      } catch (sheetError) {
        console.error('Google Sheet submission failed:', sheetError);
      }
    } else {
      console.warn('GOOGLE_SHEET_WEBAPP_URL is not set. Google Sheet submission skipped.');
    }

    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error: any) {
    console.error('Contact API error:', error);
    // General error message returned to public request to prevent disclosure of internal routes/stack information
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
