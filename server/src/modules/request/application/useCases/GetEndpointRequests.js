export class GetEndpointRequests {
    constructor(requestRepository) {
        this.requestRepository = requestRepository;
    }

    async execute(endpointId) {
        const requests = await this.requestRepository.findByEndpoint(endpointId);

        return requests.map((request) => ({
            id: request._id,
            method: request.method,
            path: request.path,
            contentType: request.contentType,
            bodySize: request.bodySize,
            receivedAt: request.receivedAt,
            ip: request.ip,
        }));
    }
}