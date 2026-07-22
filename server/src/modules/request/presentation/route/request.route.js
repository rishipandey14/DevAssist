import express from "express";
import { requestController } from "../../request.container.js";
import { authMiddleware } from "../../../../shared/middlewares/auth.middleware.js"

export const requestRoute = express.Router();

requestRoute.get("/endpoints/:endpointId/requests", authMiddleware, requestController.endpointRequests);