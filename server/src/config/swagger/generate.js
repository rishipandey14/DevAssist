import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";

import { registry } from "./registry.js";

export const generateOpenAPIDocument = () => {

    const generator =
        new OpenApiGeneratorV3(
            registry.definitions
        );

    return generator.generateDocument({

        openapi: "3.0.0",

        info: {
            title: "DevAssist API",
            version: "1.0.0",
            description: "REST API for DevAssist - A developer tool for creating endpoints, inspecting requests, and analyzing API traffic."
        },
        
        security: [
            {
                bearerAuth: []
            }
        ],

        servers: [
            {
                url: "http://localhost:8030"
            }
        ],
    });
};