import { registry } from "../../../../config/swagger/registry.js";
import { RegisterSchema } from "../../application/schema/register.schema.js";



registry.registerPath({
    method: "post",
    path: "/api/auth/register",
    tags: ["Auth"],
    summary: "Register User",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: RegisterSchema
                }
            }
        }
    },
    responses: {
        201: {
            description: "User Registered"
        }
    }
});