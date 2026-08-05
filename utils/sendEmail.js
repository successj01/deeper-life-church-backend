import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: options.email,
      subject: options.subject,
      text: options.message,
    });

    console.log("Email sent successfully");

  } catch (error) {

    console.error("EMAIL ERROR:", error);

    throw error;

  }
};

export default sendEmail;