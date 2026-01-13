import nodemailer from "nodemailer";

export const runtime = "nodejs"; // 🔴 REQUIRED

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      gender,
      date,
      phone,
      countryCode,
      service,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Appointment Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Appointment Request",
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("✅ Mail sent successfully");
    return Response.json({ success: true });
  } catch (error) {
    console.error("❌ Mail error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
