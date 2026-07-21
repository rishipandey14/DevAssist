import express from "express";
import swaggerUi from "swagger-ui-express"

import { authRoute } from "./src/modules/auth/presentation/routes/auth.routes.js";
import { endpointRoute } from "./src/modules/endpoints/presentation/routes/endpoint.route.js";
import { webhookRoute } from "./src/modules/request/presentation/route/webhook.route.js";

import { generateOpenAPIDocument } from "./src/config/swagger/generate.js";
import { errorHandler } from "./src/shared/middlewares/error.middleware.js";

import "./src/config/swagger/registerDocs.js";

export const app = express();
app.use(
    express.json({
        limit: "10mb",
        verify: (req, res, buf) => {
            req.rawBody = buf.toString("utf8");
        },
    })
);

app.use(
    express.urlencoded({
        extended: true,
        verify: (req, res, buf) => {
            req.rawBody = buf.toString("utf8");
        },
    })
);

const swaggerDocument = generateOpenAPIDocument();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * API Routes
 */
app.use("/api/auth", authRoute);
app.use("/api", endpointRoute);
// app.use("/api", requestRoute);


/**
 * Public Webhook Routes
 */
app.use("/hooks", webhookRoute);


/**
 * Global Error Handler
 */
app.use(errorHandler);