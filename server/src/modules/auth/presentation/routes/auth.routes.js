import express from "express";
import { validate } from "../../../../shared/middlewares/validate.middleware.js";
import { RegisterSchema } from "../../application/schema/register.schema.js";
import { authController } from "../../auth.container.js";
import { registry } from "../../../../config/swagger/registry.js";


export const authRoute = express.Router();

registry.registerPath({
    method: "post",
    path: "/api/auth/register",
    tags: ["Auth"],
    summary: "Register User",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: RegisterSchema
                }
            }
        }
    },
    responses: {
        201: {
            description: "User Registered"
        }
    }
})

authRoute.post("/register", validate(RegisterSchema), authController.register);

