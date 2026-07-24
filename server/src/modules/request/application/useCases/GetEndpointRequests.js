import { APIError } from "../../../../config/error.js";
import { buildPagination } from "../../../../shared/utils/pagination.js";

export class GetEndpointRequests {
    constructor(requestRepository, getOwnedEndpoint) {
        this.requestRepository = requestRepository;
        this.getOwnedEndpoint = getOwnedEndpoint;
    }

    async execute(userId, endpointId, options) {
        await this.getOwnedEndpoint.execute(userId, endpointId);
        
        const { pagination } = options;
        const { requests, total } = await this.requestRepository.findByEndpoint(endpointId, options);

        const data = requests.map((request) => ({
            id: request._id,
            method: request.method,
            path: request.path,
            contentType: request.contentType,
            bodySize: request.bodySize,
            receivedAt: request.receivedAt,
            ip: request.ip,
        }));

        return {
            data,
            pagination: buildPagination(
                pagination.page,
                pagination.limit,
                total
            ),
        };
    }
}