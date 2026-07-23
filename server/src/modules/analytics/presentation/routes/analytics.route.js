import express from "express";
import { authMiddleware } from "../../../../shared/middlewares/auth.middleware.js";
import { analyticsController } from "../../analytics.container.js";


export const analyticsRouter = express.Router();

analyticsRouter.get("/dashboard", authMiddleware, analyticsController.getDashboardData);
analyticsRouter.get("/endpoints/:endpointId/analytics", authMiddleware, analyticsController.getEndpointAnalyticsData);