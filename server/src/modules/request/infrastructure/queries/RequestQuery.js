import { Request } from "../models/request.js";
import mongoose from "mongoose";

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

    async getMethodsStats (endpointId) {
        const objectId = new mongoose.Types.ObjectId(endpointId);

        return Request.aggregate([
            {
                $match: { 
                    endpointId: objectId,
                },
            },
            {
                $group: {
                    _id: "$method",

                    count: { $sum: 1 },
                },
            }
        ]);
    }

    async getContentTypeStats (endpointId) {
        const objectId = new mongoose.Types.ObjectId(endpointId);

        return Request.aggregate([
            {
                $match: { endpointId: objectId, },
            },
            {
                $group: {
                    _id: "$contentType",

                    count: { $sum: 1 },
                },
            }
        ]);
    }
    
    async getLast7DaysRequests (endpointId) {
        const tillTime = new Date();
        const fromTime = new Date();

        fromTime.setDate(fromTime.getDate() - 6);
        fromTime.setHours(0,0,0,0);

        const objectId = new mongoose.Types.ObjectId(endpointId);

        return Request.aggregate([
            {
                $match: {
                    endpointId: objectId,
                    receivedAt : {
                        $gte: fromTime,
                        $lte: tillTime,
                    },
                },
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: "$receivedAt",
                        },
                    },
                    count: {
                        $sum: 1,
                    }
                }
            },
            {
                $sort: { _id: 1 }
            }
        ]);
    }
};