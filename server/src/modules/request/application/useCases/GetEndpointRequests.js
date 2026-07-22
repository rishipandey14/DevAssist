import { buildPagination } from "../../../../shared/utils/pagination.js";

export class GetEndpointRequests {
    constructor(requestRepository) {
        this.requestRepository = requestRepository;
    }

    async execute(endpointId, options) {
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