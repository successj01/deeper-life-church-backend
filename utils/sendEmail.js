import "dotenv/config";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (options) => {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [options.email],
      subject: options.subject,
      text: options.message,
    });

    if (error) {
      console.error("❌ RESEND EMAIL ERROR:", error);
      throw new Error(error.message);
    }

    console.log("✅ Email sent successfully:", data);

    return data;
  } catch (error) {
    console.error("❌ RESEND EMAIL ERROR:", error.message);
    throw error;
  }
};

export default sendEmail;