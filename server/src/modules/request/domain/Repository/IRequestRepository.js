export class IRequestRepository {
    // capture the incoming request
    async captureRequest(request) {}

    // get the list of request for particular endpoint
    async findByEndpoint(endpointId, options) {}

    // get the reuest info 
    async findById(requestId) {}
};