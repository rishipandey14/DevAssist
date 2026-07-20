import express from "express";
import { validate } from "../../../../shared/middlewares/validate.middleware.js";
import { CreateEndpointSchema } from "../../application/schema/CreateEndpoint.schema.js";
import { endpointController } from "../../endpoint.container.js";
import { authMiddleware } from "../../../../shared/middlewares/auth.middleware.js";

export const endpointRoute = express.Router();

endpointRoute.post("/endpoints", authMiddleware, validate(CreateEndpointSchema), endpointController.create);
endpointRoute.get("/endpoints", authMiddleware, endpointController.endpointListing);
endpointRoute.get("/endpoints/:endpointId", authMiddleware, endpointController.fetchEndpoint);