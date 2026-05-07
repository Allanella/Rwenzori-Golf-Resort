import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // ─── Validation ───────────────────────────
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    // ─── Guard: env vars must be set ──────────
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('EMAIL_USER or EMAIL_PASS env vars are missing.');
      return NextResponse.json(
        { error: 'Email service is not configured. Please call us directly at +256 746 077 473.' },
        { status: 500 }
      );
    }

    // ─── Transporter ──────────────────────────
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.EMAIL_USER,   // mtrwenzorigolfresortspa@gmail.com
        pass: process.env.EMAIL_PASS,   // 16-char Gmail App Password
      },
    });

    const timestamp = new Date().toLocaleString('en-UG', { timeZone: 'Africa/Kampala' });
    const displaySubject = subject || 'General Inquiry';

    // ─── Email to resort ──────────────────────
    await transporter.sendMail({
      from: `"Mt. Rwenzori Website" <${process.env.EMAIL_USER}>`,
      to: 'mtrwenzorigolfresortspa@gmail.com',
      replyTo: email,
      subject: `[Website Enquiry] ${displaySubject} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f9f6f1;">
            <div style="max-width:600px;margin:0 auto;background:#ffffff;">

              <!-- Header -->
              <div style="background:#2c3d2e;padding:32px 40px;">
                <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(249,246,241,0.5);">Mt. Rwenzori Golf Resort &amp; Spa</p>
                <h1 style="margin:8px 0 0;font-size:24px;font-weight:300;color:#f9f6f1;">New Website Enquiry</h1>
                <div style="width:40px;height:1px;background:#b8945a;margin-top:16px;"></div>
              </div>

              <!-- Details -->
              <div style="padding:32px 40px;">
                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e8dece;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6b7569;width:120px;">Name</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e8dece;font-size:14px;color:#1a1f1b;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e8dece;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6b7569;">Email</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e8dece;font-size:14px;color:#1a1f1b;"><a href="mailto:${email}" style="color:#b8945a;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e8dece;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6b7569;">Phone</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e8dece;font-size:14px;color:#1a1f1b;">${phone || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e8dece;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6b7569;">Subject</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e8dece;font-size:14px;color:#1a1f1b;">${displaySubject}</td>
                  </tr>
                </table>

                <div style="margin-top:28px;">
                  <p style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6b7569;margin-bottom:12px;">Message</p>
                  <div style="background:#f9f6f1;border-left:3px solid #b8945a;padding:20px 24px;font-size:14px;color:#1a1f1b;line-height:1.8;">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>

              <!-- Footer -->
              <div style="background:#f9f6f1;padding:20px 40px;border-top:1px solid #e8dece;">
                <p style="margin:0;font-size:11px;color:#6b7569;">Received: ${timestamp} (EAT) · Reply directly to this email to respond to ${name}</p>
              </div>

            </div>
          </body>
        </html>
      `,
      text: `New Enquiry from ${name}\n\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${displaySubject}\n\nMessage:\n${message}\n\nReceived: ${timestamp}`,
    });

    // ─── Confirmation email to guest ──────────
    await transporter.sendMail({
      from: `"Mt. Rwenzori Golf Resort & Spa" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your message — Mt. Rwenzori Golf Resort & Spa`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f9f6f1;">
            <div style="max-width:600px;margin:0 auto;background:#ffffff;">

              <!-- Header -->
              <div style="background:#2c3d2e;padding:32px 40px;">
                <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(249,246,241,0.5);">Mt. Rwenzori Golf Resort &amp; Spa</p>
                <h1 style="margin:8px 0 0;font-size:24px;font-weight:300;color:#f9f6f1;">Thank you, ${name}</h1>
                <div style="width:40px;height:1px;background:#b8945a;margin-top:16px;"></div>
              </div>

              <!-- Body -->
              <div style="padding:32px 40px;">
                <p style="font-size:15px;line-height:1.8;color:#1a1f1b;">
                  We've received your message regarding <strong>${displaySubject}</strong> and our team will be in touch within <strong>24 hours</strong>.
                </p>

                <div style="background:#f9f6f1;border-left:3px solid #b8945a;padding:20px 24px;margin:24px 0;font-size:13px;color:#6b7569;font-style:italic;line-height:1.75;">
                  "${message.substring(0, 200)}${message.length > 200 ? '…' : ''}"
                </div>

                <p style="font-size:14px;color:#1a1f1b;line-height:1.7;">
                  If you need immediate assistance, please don't hesitate to call us directly:
                </p>

                <div style="text-align:center;margin:28px 0;">
                  <a href="tel:+256746077473" style="display:inline-block;background:#2c3d2e;color:#f9f6f1;padding:14px 32px;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;">
                    +256 746 077 473
                  </a>
                </div>

                <p style="font-size:14px;color:#1a1f1b;">
                  We look forward to welcoming you to the mountain.<br />
                  <em style="color:#b8945a;">— The Mt. Rwenzori Team</em>
                </p>
              </div>

              <!-- Footer -->
              <div style="background:#2c3d2e;padding:24px 40px;">
                <p style="margin:0;font-size:11px;color:rgba(249,246,241,0.4);line-height:1.8;">
                  Mt. Rwenzori Golf Resort &amp; Spa · Kasese, Rwenzori Mountain Region, Uganda<br />
                  <a href="mailto:mtrwenzorigolfresortspa@gmail.com" style="color:rgba(184,148,90,0.7);text-decoration:none;">mtrwenzorigolfresortspa@gmail.com</a>
                </p>
              </div>

            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent. We will get back to you within 24 hours.',
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Contact form error:', error?.message || error);
    return NextResponse.json(
      { error: 'Failed to send message. Please call us directly at +256 746 077 473.' },
      { status: 500 }
    );
  }
}