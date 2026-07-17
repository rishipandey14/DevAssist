import z from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const LoginSchema = z.object({
    email: z
        .string()
        .email()
        .openapi({
            example: "abc@gmail.com"
        }),
    
    password: z
        .string()
        .min(8)
        .openapi({
            example: "Password@123"
        }),

}).openapi("LoginRequest");