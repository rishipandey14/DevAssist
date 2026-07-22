import { APIError } from "../../../../config/error.js"

export class GetRequest {
    constructor(requestRepository) {
        this.requestRepository = requestRepository
    }

    async execute(requestId) {
        const request = await this.requestRepository.findById(requestId);

        if(!request) throw new APIError("Request not found", 404);

        return request;
    }
};