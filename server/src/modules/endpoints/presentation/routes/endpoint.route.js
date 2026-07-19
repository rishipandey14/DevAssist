import express from "express";
import { validate } from "../../../../shared/middlewares/validate.middleware.js";
import { CreateEndpointSchema } from "../../application/schema/CreateEndpoint.schema.js";
import { endpointController } from "../../endpoint.container.js";
import { authMiddleware } from "../../../auth/presentation/middlewares/auth.middleware.js";

export const endpointRoute = express.Router();

endpointRoute.post("/endpoint", authMiddleware, validate(CreateEndpointSchema), endpointController.create);
endpointRoute.get("/endpoint", authMiddleware, endpointController.endpointListing);