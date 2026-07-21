import express from "express";
import { requestController } from "../../request.container.js";

export const webhookRoute = express.Router();

// capture incoming request
webhookRoute.all("/:slug", requestController.capture);
