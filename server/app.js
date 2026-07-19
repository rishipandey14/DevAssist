import express from "express";
import swaggerUi from "swagger-ui-express"
import { authRoute } from "./src/modules/auth/presentation/routes/auth.routes.js";
import { endpointRoute } from "./src/modules/endpoints/presentation/routes/endpoint.route.js";
import { generateOpenAPIDocument } from "./src/config/swagger/generate.js";
import { errorHandler } from "./src/shared/middlewares/error.middleware.js";

export const app = express();
app.use(express.json());

const swaggerDocument = generateOpenAPIDocument();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/auth", authRoute);
app.use("/api", endpointRoute);


// in last
app.use(errorHandler);