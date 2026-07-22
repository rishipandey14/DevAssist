import { IRequestRepository } from "../../domain/Repository/IRequestRepository.js";
import { Request } from "../models/request.js";

export class MongoRequestRepository extends IRequestRepository {
    async captureRequest(request) {
        return await Request.create({
            endpointId: request.endpointId,
            method: request.method,
            path: request.path,
            headers: request.headers,
            query: request.query,
            body: request.body,
            rawBody: request.rawBody,
            contentType: request.contentType,
            ip: request.ip,
            userAgent: request.userAgent,
            bodySize: request.bodySize,
        });
    }


    async findByEndpoint(endpointId, pagination) {
        const {skip, limit} = pagination;

        const requests = await Request.find({endpointId})
            .sort({receivedAt : -1})
            .skip(skip)
            .limit(limit);
        
        const total = await Request.countDocuments({endpointId});

        return {
            requests,
            total
        }

    }

    async findById(requestId) {
        return await Request.findById(requestId);
    }
}