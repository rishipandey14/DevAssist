

export class AnalyticsController {
    constructor(getDashboardAnalytics) {
        this.getDashboardAnalytics = getDashboardAnalytics;
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
}