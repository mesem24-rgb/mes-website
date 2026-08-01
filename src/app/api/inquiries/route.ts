import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({
    status: "MES inquiry API is working!",
  });
}

export async function POST(request: Request) {
  try {
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
      from: process.env.INQUIRY_FROM_EMAIL!,
      to: process.env.INQUIRY_TO_EMAIL!,
      replyTo: email,
      subject: `New MES Inquiry from ${name}`,
      html: `
        <h2>New Website Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>

        <hr>

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          message: "Unable to send email.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      message: "Inquiry sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Server error.",
      },
      {
        status: 500,
      }
    );
  }
}