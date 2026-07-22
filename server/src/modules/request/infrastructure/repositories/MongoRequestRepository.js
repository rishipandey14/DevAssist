import { IRequestRepository } from "../../domain/Repository/IRequestRepository.js";
import { Request } from "../models/request.js";

export class MongoRequestRepository extends IRequestRepository {
    
    buildQuery(endpointId, filters, search) {
        const query = {
            endpointId,
            ...filters,
        };

        if (search) {
            query.$or = [
                {
                    path: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    method: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    contentType: {
                        $regex: search,
                        $options: "i",
                    },
                },
            ];
        }

        return query;
    }

    
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


    async findByEndpoint(endpointId, options) {
        const { pagination, filters, sorting, search } = options;

        const query = this.buildQuery(endpointId, filters, search);

        const requests = await Request.find(query)
            .sort(sorting)
            .skip(pagination.skip)
            .limit(pagination.limit);
        
        const total = await Request.countDocuments(query);

        return {
            requests,
            total
        }

    }

    async findById(requestId) {
        return await Request.findById(requestId);
    }
}