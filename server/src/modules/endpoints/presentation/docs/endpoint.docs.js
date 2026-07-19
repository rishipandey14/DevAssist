import { registry } from "../../../../config/swagger/registry.js";
import { CreateEndpointSchema } from "../../application/schema/CreateEndpoint.schema.js";
import { EndpointIdSchema } from "../../application/schema/params/EndpointId.schema.js";


registry.registerPath({
    method: "post",
    path: "/api/endpoints",
    tags: ["Endpoint"],
    summary: "Create Endpoint",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: CreateEndpointSchema
                }
            }
        }
    },
    responses: {
        201: {
            description: "Endpoint Created"
        },
        400: {
            description: "Invalid credentials"
        }
    }
});


registry.registerPath({
    method: "get",
    path: "/api/endpoints",
    tags: ["Endpoint"],
    summary: "Get all Endpoints",
    description: "Returns all endpoints created by the authenticated user.",
    responses: {
        200: {
            description: "Endpoints retrieved successfully"
        },
        401: {
            description: "Unauthorized"
        },
        500: {
            description: "Internal server error"
        }
    }
});


registry.registerPath({
    method: "get",
    path: "/api/endpoints/{endpointId}",
    tags: ["Endpoint"],
    summary: "Get endpoint",
    description: "Returns a specific endpoint created by the authenticated user.",
    request: {
        params: EndpointIdSchema
    },
    responses: {
        200: {
            description: "Endpoint retrieved successfully",
        },
        401: {
            description: "Unauthorized",
        },
        404: {
            description: "Endpoint not found",
        },
        500: {
            description: "Internal server error",
        },
    }
});