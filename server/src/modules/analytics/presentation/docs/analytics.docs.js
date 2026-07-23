import { registry } from "../../../../config/swagger/registry.js";
import { z } from "zod";

registry.registerPath({
    method: "get",
    path: "/api/dashboard",
    tags: ["Analytics"],
    summary: "Get Dashboard ",
    responses: {
        200: {
            description: "Dashboard data fetched successfully"
        },
        400: {
            description: "Invalid credentials"
        }
    }
});


registry.registerPath({
    method: "get",
    path: "/endpoints/{endpointId}/analytics",
    tags: ["Analytics"],
    summary: "Get endpoint analytics",
    description: "Retrieve analytics for a specific endpoint, including total requests, today's requests, HTTP method distribution, content type distribution, and request trends over the last 7 days.",
    request: {
        params: z.object({
            endpointId: z.string().openapi({
                example: "64f1a2b3c4d5e6f789012345",
                description: "Unique identifier of the endpoint",
            }),
        }),
    },
    responses: {
        200: {
            description: "Endpoint analytics fetched successfully",
        },
        401: {
            description: "Unauthorized",
        },
        403: {
            description: "Forbidden",
        },
        404: {
            description: "Endpoint not found",
        },
    },
});