import { Endpoint } from "../models/endpoint.js";

export class EndpointQuery {
    async countByUser (userId) {
        return Endpoint.countDocuments({ userId });
    }

    async findIdsByUser(userId) {
        return Endpoint.find({userId}, "_id");
    }
};