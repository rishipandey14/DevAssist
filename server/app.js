import express from "express";
import swaggerUi from "swagger-ui-express"
import { authRoute } from "./src/modules/auth/presentation/routes/auth.routes.js";
import { generateOpenAPIDocument } from "./src/config/swagger/generate.js";

export const app = express();
app.use(express.json());

const swaggerDocument = generateOpenAPIDocument();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/auth", authRoute);
