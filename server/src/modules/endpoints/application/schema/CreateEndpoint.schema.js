import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const CreateEndpointSchema = z.object({
    name: z
        .string()
        .trim()
        .max(50)
        .openapi({
            example: "Github"
        }),
    
    method: z.enum(
        ["GET", "POST", "PUT", "PATCH", "DELETE"],
        {
            error: "Invalid HTTP method"
        }
    )
});