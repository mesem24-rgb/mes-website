import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  return NextResponse.json({
    status: "MES inquiry API is working!",
  });
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.INQUIRY_TO_EMAIL;
    const fromEmail = process.env.INQUIRY_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing inquiry environment variables.");

      return NextResponse.json(
        {
          message:
            "The inquiry service is not configured. Please email mesem24@gmail.com directly.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();

    const {
      name,
      email,
      company,
      phone,
      projectType,
      message,
    } = body;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New MES Inquiry from ${name}`,
      html: `
        <h2>New Website Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>

        <hr />

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          message:
            "Unable to send your inquiry. Please email mesem24@gmail.com directly.",
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error("Inquiry route error:", error);

    return NextResponse.json(
      {
        message: "Server error.",
      },
      { status: 500 },
    );
  }
}