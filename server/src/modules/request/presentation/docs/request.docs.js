import { registry } from "../../../../config/swagger/registry.js";
import { z } from "zod";


registry.registerPath({
    method: "post",
    path: "/hooks/{slug}",
    tags: ["Requests"],
    security: [],
    summary: "Capture an incoming webhook request",
    description:
        "Captures any incoming HTTP request for the specified endpoint slug.",

    request: {
        params: z.object({
            slug: z.string(),
        }),
    },

    responses: {
        201: {
            description: "Request captured successfully",
        },
        404: {
            description: "Endpoint not found",
        },
    },
});


registry.registerPath({
    method: "get",
    path: "/api/endpoints/{endpointId}/requests",
    tags: ["Requests"],
    summary: "List captured requests",
    description: "Returns all captured requests for a specific endpoint.",
    request: {
        params: z.object({
            endpointId: z.string(),
        }),
    },
    responses: {
        200: {
            description: "Requests fetched successfully",
        },
        401: {
            description: "Unauthorized",
        },
        404: {
            description: "Endpoint not found",
        },
    },
});



registry.registerPath({
    method: "get",
    path: "/api/requests/{requestId}",
    tags: ["Requests"],
    summary: "Get request details",
    description: "Returns complete details of a captured request.",
    request: {
        params: z.object({
            requestId: z.string(),
        }),
    },
    responses: {
        200: {
            description: "Request fetched successfully",
        },
        401: {
            description: "Unauthorized",
        },
        404: {
            description: "Request not found",
        },
    },
});