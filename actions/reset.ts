"use server";

import { getUserByEmail } from "@/data/user";
import { sendResetEmail } from "@/lib/mail";
import { generateResetToken } from "@/lib/tokens";
import { ResetSchema, ResetSchemaType } from "@/schemas";

export const reset = async (values: ResetSchemaType) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User doesn't exist!" };
  }

  const resetToken = await generateResetToken(email);
  await sendResetEmail(email, resetToken.token);

  return { success: "Reset email sent!" };
};
