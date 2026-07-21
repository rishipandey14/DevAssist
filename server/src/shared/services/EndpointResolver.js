export class EndpointResolver {
    constructor(endpointRepository) {
        this.endpointRepository = endpointRepository
    }

    async resolveBySlug(slug) {
        return await this.endpointRepository.findBySlug(slug);
    }
};