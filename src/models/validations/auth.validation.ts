import { z } from "zod"

export const authValidationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
})

export type authFormDef = z.infer<
  typeof authValidationSchema
>;