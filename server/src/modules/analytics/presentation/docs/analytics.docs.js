import { registry } from "../../../../config/swagger/registry.js";

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