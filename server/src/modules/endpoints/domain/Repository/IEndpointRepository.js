export class IEndpointRepository {
    // create a endpoint
    async create(endpoint) {}

    // get endpoint by its id
    async findById(id) {}

    // get endpoint by its slug
    async findBySlug(slug) {}

    // get endpoints by userId
    async findByUserId(userId) {}

    // update the endpoint with data
    async update(id, data) {}

    // delete the endpoint
    async delete(id) {}
};