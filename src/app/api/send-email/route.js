import nodemailer from "nodemailer";

export async function POST(request) {
  const gmailUser = process.env.GMAIL_USERNAME;
  const gmailPass = process.env.GMAIL_PASSWORD;
  const toEmail = process.env.TO_EMAIL;

  if (!gmailUser || !gmailPass || !toEmail) {
    return new Response(
      JSON.stringify({
        message:
          "Server configuration error. Please check environment variables.",
        error: true,
        success: false,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    // Parse JSON body
    const body = await request.json();

    const { firstName, lastName, email, phone, message, inquiryType } = body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !message ||
      !inquiryType
    ) {
      return new Response(
        JSON.stringify({
          message: "All fields are required.",
          error: true,
          success: false,
          fieldValues: {
            firstName,
            lastName,
            email,
            phone,
            message,
            inquiryType,
          },
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Create transporter correctly
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass, // Use App Password
      },
    });

    // Mail options
    const mailOptions = {
      from: gmailUser,
      to: toEmail,
      subject: `New Contact Form Submission: ${inquiryType} from ${firstName} ${lastName}`,
      text: `Inquiry Type: ${inquiryType}
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: "Email sent successfully!",
        error: false,
        success: true,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Email error:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to send email. Try again later.",
        error: true,
        success: false,
        errorDetails: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
