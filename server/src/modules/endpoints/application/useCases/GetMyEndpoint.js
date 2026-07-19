import { APIError } from "../../../../config/error.js";


export class GetEndpoints {
    constructor(endpointRepository) {
        this.endpointRepository = endpointRepository
    }

    async execute (userId) {
        const endpoints = await this.endpointRepository.findByUserId(userId);
        if(!endpoints) throw new APIError("There's no Endpoint created.", 200);
        return {
            endpoints: endpoints
        };
    }
};