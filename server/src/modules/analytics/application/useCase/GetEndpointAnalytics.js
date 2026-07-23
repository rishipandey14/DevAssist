export class GetEndpointAnalytics {
    constructor(analyticsRepository) {
        this.analyticsRepository = analyticsRepository
    }

    async execute (endpointId) {
        return await this.analyticsRepository.getEndpointAnalytics(endpointId);
    }
};