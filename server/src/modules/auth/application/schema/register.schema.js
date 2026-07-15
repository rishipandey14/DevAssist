import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const RegisterSchema = z.object({

    name: z
        .string()
        .min(2)
        .max(50)
        .openapi({
            example: "Rishi Pandey"
        }),

    email: z
        .string()
        .email()
        .openapi({
            example: "rishi@gmail.com"
        }),

    password: z
        .string()
        .min(8)
        .openapi({
            example: "Password@123"
        }),

    avatar: z
        .string()
        .url()
        .nullable()
        .optional()

}).openapi("RegisterRequest");