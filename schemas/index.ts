import { Role } from "@prisma/client"
import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters"
  }),
  code: z.string().optional()
})

export type LoginSchemaType = z.infer<typeof LoginSchema>

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Email is required"
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters"
  })
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required"
  })
})

export type ResetSchemaType = z.infer<typeof ResetSchema>

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters"
  })
})

export type NewPasswordType = z.infer<typeof NewPasswordSchema>

export const SettingsSchema = z
  .object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().min(6).optional(),
    newPassword: z.string().min(6).optional(),
    isTwoFactorEnabled: z.boolean().optional(),
    role: z.enum([Role.ADMIN, Role.USER])
  })
  .refine(data => {
    if (data.password && !data.newPassword) {
      return false
    }

    return true
  })
  .refine(data => {
    if (!data.password && data.newPassword) {
      return false
    }

    return true
  })

export type SettingsSchemaType = z.infer<typeof SettingsSchema>
