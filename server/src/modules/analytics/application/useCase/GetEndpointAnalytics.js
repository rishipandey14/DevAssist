import { APIError } from "../../../../config/error.js";

export class GetEndpointAnalytics {
    constructor({analyticsRepository, getOwnedEndpoint}) {
        this.analyticsRepository = analyticsRepository;
        this.getOwnedEndpoint = getOwnedEndpoint;
    }

    async execute (userId, endpointId) {
        await this.getOwnedEndpoint.execute(userId, endpointId);
        
        return await this.analyticsRepository.getEndpointAnalytics(endpointId);
    }
};