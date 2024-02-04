"use server";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { getUserByEmail } from "@/data/user";
import db from "@/lib/db";

export const newVerification = async (token: string) => {
  const verificationToken = await getVerificationTokenByToken(token);

  if (!verificationToken) {
    return { error: "There is no token!" };
  }

  const hasExpired = new Date(verificationToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(verificationToken.email);

  if (!existingUser) {
    return { error: "There is no user!" };
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: verificationToken.email,
    },
  });

  await db.verificationToken.delete({
    where: {
      id: verificationToken.id,
    },
  });

  return { success: "Email verified!" };
};
