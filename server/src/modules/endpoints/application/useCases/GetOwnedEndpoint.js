import { APIError } from "../../../../config/error.js";


export class GetOwnedEndpoint {
    constructor(endpointQuery) {
        this.endpointQuery = endpointQuery;
    }

    async execute(userId, endpointId) {
        const endpoint = await this.endpointQuery.findById(endpointId);
        
        if(!endpoint) throw new APIError("Endpoint not found", 404);

        if(endpoint.userId.toString() !== userId) throw new APIError("Unauthorized", 403);

        return endpoint;
    }
};