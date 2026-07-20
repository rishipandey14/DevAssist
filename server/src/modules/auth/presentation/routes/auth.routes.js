import express from "express";
import { validate } from "../../../../shared/middlewares/validate.middleware.js";
import { RegisterSchema } from "../../application/schema/register.schema.js";
import { LoginSchema } from "../../application/schema/login.schema.js";
import { authController } from "../../auth.container.js";
import { authMiddleware } from "../../../../shared/middlewares/auth.middleware.js";
import "../docs/auth.swagger.js"

export const authRoute = express.Router();


authRoute.post("/register", validate(RegisterSchema), authController.register);
authRoute.post("/login", validate(LoginSchema), authController.login);
authRoute.get("/me", authMiddleware, authController.getMe)

