import { APIError } from "../../../../config/error.js";


export class GetEndpoint {
    constructor(endpointRepository) {
        this.endpointRepository = endpointRepository
    }

    async execute(id) {
        const endpoint = await this.endpointRepository.findById(id);
        if (!endpoint) throw new APIError("There's no active endpoint with this id", 404);

        return {
            endpoint: endpoint
        }
    }
};