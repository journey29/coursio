import db from "@/lib/db";

export const getResetTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.resetToken.findFirst({
      where: {
        email,
      },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const getResetTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.resetToken.findUnique({
      where: {
        token,
      },
    });

    return verificationToken;
  } catch {
    return null;
  }
};
