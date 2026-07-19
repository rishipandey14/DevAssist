import { registry } from "../../../../config/swagger/registry.js";
import { CreateEndpointSchema } from "../../application/schema/CreateEndpoint.schema.js";


registry.registerPath({
    method: "post",
    path: "/api/endpoint",
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
