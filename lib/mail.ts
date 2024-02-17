import nodemailer from "nodemailer";

const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASSWORD,
  },
});

export const sendVerificationEmail = async ({
  to,
  token,
}: {
  to: string;
  token: string;
}) => {
  try {
    const confirmLink = `${process.env.AUTH_URL}/auth/new-verification?token=${token}`;

    await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject: "Confirm your email",
      html: `<p>Confirm your email by <a href="${confirmLink}">link</a></p>`,
    });
  } catch {
    return null;
  }
};

export const sendResetEmail = async ({
  to,
  token,
}: {
  to: string;
  token: string;
}) => {
  try {
    const resetLink = `${process.env.AUTH_URL}/auth/new-password?token=${token}`;

    await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject: "Reset your password",
      html: `<p>Reset your password by <a href="${resetLink}">link</a></p>`,
    });
  } catch {
    return null;
  }
};

export const sendTwoFactorTokenEmail = async ({
  to,
  token,
}: {
  to: string;
  token: string;
}) => {
  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject: "Two factor token",
      html: `<p>Your two factor verification token: ${token}</p>`,
    });
  } catch {
    return null;
  }
};
