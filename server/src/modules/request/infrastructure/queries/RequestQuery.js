import { Request } from "../models/request.js";

export class RequestQuery {
    async countByEndpointIds (endpointIds) {
        return Request.countDocuments({
            endpointId: {
                $in: endpointIds,
            },
        });
    };

    async getTodayRequestCount (endpointIds) {
        const startTime = new Date();
        startTime.setHours(0,0,0,0);

        const endTime = new Date();
        endTime.setHours(23,59,59,999);

        return Request.countDocuments({
            endpointId: { $in: endpointIds },
            receivedAt: {
                $gte: startTime,
                $lte: endTime,
            },
        });
    };


    async getRecentRequests (endpointIds, limit = 10) {
        return Request.find({
            endpointId: { $in: endpointIds },
        })
            .sort({ receivedAt: -1 })
            .limit(limit)
            .select("_id method path bodySize receivedAt endpointId");
    };


    async getTopEndpoints (endpointIds, limit = 5) {
        return Request.aggregate([
            {
                $match: {
                    endpointId: { $in: endpointIds, }
                },
            },
            {
                $group: {
                    _id: "$endpointId",
                    requests: { $sum: 1, }
                }
            },
            {
                $sort: { requests: -1 }
            },
            {
                $limit: limit,
            },
        ]);
    }

};