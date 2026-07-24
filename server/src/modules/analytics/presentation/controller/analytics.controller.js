

export class AnalyticsController {
    constructor(getDashboardAnalytics, getEndpointAnalytics) {
        this.getDashboardAnalytics = getDashboardAnalytics;
        this.getEndpointAnalytics = getEndpointAnalytics;
    }

    getDashboardData = async (req, res, next) => {
        try {
            const userId = req.user.id;
            const result = await this.getDashboardAnalytics.execute(userId);

            return res.status(200).json({
                success: true,
                message: "Dashboard analytics fetched successfully",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    }

    getEndpointAnalyticsData = async (req, res, next) => {
        try {
            const result = await this.getEndpointAnalytics.execute(req.user.id, req.params.endpointId);

            return res.status(200).json({
                success: true,
                message: "Endpoint Analytics fetched successfully",
                data: result,
            });
        } catch (error) {
            next(error);
        }
    }
}