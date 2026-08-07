import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Deeper Life Church" <${process.env.EMAIL_USER}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
    });

    console.log("✅ Email sent successfully");

  } catch (error) {

    console.error("❌ EMAIL ERROR:", error.mesage);

    throw error;

  }
};

export default sendEmail;