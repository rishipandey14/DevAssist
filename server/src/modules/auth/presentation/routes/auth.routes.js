import express from "express";
import { validate } from "../../../../shared/middlewares/validate.middleware.js";
import { RegisterSchema } from "../../application/schema/register.schema.js";
import { authController } from "../../auth.container.js";
import "../docs/auth.swagger.js"

export const authRoute = express.Router();


authRoute.post("/register", validate(RegisterSchema), authController.register);

