export class GetDashboardAnalytics {
    constructor(analyticsRepository) {
        this.analyticsRepository = analyticsRepository;
    }

    async execute(userId) {
        const dashboardData = await this.analyticsRepository.getDashboardAnalytics(userId);
        return dashboardData;
    }
};