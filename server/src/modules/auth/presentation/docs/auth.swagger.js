import { registry } from "../../../../config/swagger/registry.js";
import { LoginSchema } from "../../application/schema/login.schema.js";
import { RegisterSchema } from "../../application/schema/register.schema.js";



registry.registerPath({
    method: "post",
    path: "/api/auth/register",
    security: [],
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
        },
        401: {
            description: "Invalid credentials"
        }
    }
});


registry.registerPath({
    method: "post",
    path: "/api/auth/login",
    security: [],
    tags: ["Auth"],
    summary: "Login User",
    request: {
        body: {
            content: {
                "application/json" : {
                    schema: LoginSchema
                }
            }
        }
    },
    responses: {
        200: {
            description: "User Logged in successfully"
        },
        401: {
            description: "Invalid credentials."
        }
    }
});


registry.registerPath({
    method: "get",
    path: "/api/auth/me",
    tags: ["Auth"],
    summary: "get Current User",
    responses: {
        200: {
            description: "Authenticated user details."
        }, 
        401: {
            description: "Unauthorized"
        }
    }
});