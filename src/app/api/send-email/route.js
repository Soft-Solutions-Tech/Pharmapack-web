const nodemailer = require('nodemailer');

export async function POST(request) {
  const gmailUser = process.env.GMAIL_USERNAME;
  const gmailPass = process.env.GMAIL_PASSWORD;
  const toEmail = process.env.TO_EMAIL;

  if (!gmailUser || !gmailPass || !toEmail) {
    return new Response(
      JSON.stringify({
        message: 'Server configuration error. Please check environment variables.',
        error: true,
        success: false,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const formData = await request.formData();
  const rawFormData = {
    name: formData.get('name'),
    mobile: formData.get('mobile'),
    message: formData.get('message'),
  };

  if (!rawFormData.name || !rawFormData.mobile || !rawFormData.message) {
    return new Response(
      JSON.stringify({
        message: 'All fields are required.',
        error: true,
        success: false,
        fieldValues: rawFormData,
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  const mailOptions = {
    from: gmailUser,
    to: toEmail,
    subject: `New Contact Form Submission from ${rawFormData.name}`,
    text: `Name: ${rawFormData.name}\nMobile: ${rawFormData.mobile}\n\nMessage:\n${rawFormData.message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({
        message: 'Email sent successfully!',
        error: false,
        success: true,
        fieldValues: { name: '', mobile: '', message: '' },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Email error:', error);
    return new Response(
      JSON.stringify({
        message: 'Failed to send email. Try again later.',
        error: true,
        success: false,
        fieldValues: rawFormData,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}