import { IAnalyticsRepository } from "../../domain/repositories/IAnalyticsRepository.js";

export class MongoAnalyticsRepository extends IAnalyticsRepository {
    constructor(endpointQuery, requestQuery) {
        super();
        this.endpointQuery = endpointQuery;
        this.requestQuery = requestQuery;
    }

    async getDashboardAnalytics(userId) {
        const totalEndpoints = await this.endpointQuery.countByUser(userId);

        const endpoints = await this.endpointQuery.findIdsByUser(userId);

        const endpointIds = endpoints.map(endpoint => endpoint._id);

        const [
            totalRequests, 
            requestsToday,
            recentReuests,
            topEndpoints
        ] = await Promise.all([
            this.requestQuery.countByEndpointIds(endpointIds),
            this.requestQuery.getTodayRequestCount(endpointIds),
            this.requestQuery.getRecentRequests(endpointIds),
            this.requestQuery.getTopEndpoints(endpointIds),
        ]);

        return {
            totalEndpoints,
            totalRequests,
            requestsToday,
            recentReuests,
            topEndpoints
        };
    }

}