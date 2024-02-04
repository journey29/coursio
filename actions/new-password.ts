"use server";

import { getResetTokenByToken } from "@/data/reset-token";
import { NewPasswordSchema, NewPasswordType } from "@/schemas";
import db from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { hash } from "bcryptjs";

export const newPassword = async (
  values: NewPasswordType,
  token: string | null
) => {
  if (!token) {
    return { error: "Missing token!" };
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { password } = validatedFields.data;
  const resetToken = await getResetTokenByToken(token);

  if (!resetToken) {
    return { error: "Token is not finded!" };
  }

  const hasExpired = new Date(resetToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserByEmail(resetToken.email);

  if (!existingUser) {
    return { erorr: "User is not finded!" };
  }

  const hashedPassword = await hash(password, 10);

  await db.user.update({
    data: {
      password: hashedPassword,
    },
    where: {
      id: existingUser.id,
    },
  });

  await db.resetToken.delete({
    where: {
      token,
    },
  });

  return { success: "Password successfully updated!" };
};
