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
      budget,
      message,
      journeyPath,
      journeyFocus,
    } = body;

    const budgetLabels: Record<string, string> = {
      "": "Not sure yet",
      "under-2500": "Under $2,500",
      "2500-5000": "$2,500–$5,000",
      "5000-10000": "$5,000–$10,000",
      "10000-25000": "$10,000–$25,000",
      "25000-plus": "$25,000+",
    };

    const budgetLabel = budgetLabels[budget] || "Not specified";

    const projectTypeLabels: Record<string, string> = {
      "new-product": "Build something new",
      "improve-existing": "Improve an existing system",
      website: "Business website",
      workflow: "Workflow or automation",
      direction: "Help determining the right direction",
      other: "Something else",
    };

    const projectTypeLabel = projectTypeLabels[projectType] || projectType;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New MES Inquiry from ${name}`,
      html: `
  <h2>New MES Inquiry</h2>

  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Company:</strong> ${company || "Not provided"}</p>
  <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

  <hr />

  ${
    journeyPath
      ? `
        <h3>MES Website Journey</h3>
        <p><strong>Starting point:</strong> ${journeyPath}</p>
        <p><strong>Focus:</strong> ${journeyFocus || "Not provided"}</p>
        <hr />
      `
      : ""
  }

  <p><strong>Project Type:</strong> ${projectType}</p>
  <p><strong>Project Range:</strong> ${budget || "Not provided"}</p>

  <h3>Project Need</h3>
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
