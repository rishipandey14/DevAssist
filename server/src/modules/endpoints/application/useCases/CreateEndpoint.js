import { Endpoint } from "../../domain/entity/Endpoint.js";
import { nanoid } from "nanoid";

export class CreateEndpoint {
    constructor(endpointRepository) {
        this.endpointRepository = endpointRepository
    }

    async generateUniqueSlug() {
        let slug;
        do {
            slug = nanoid(8);
        } while (await this.endpointRepository.findBySlug(slug));

        return slug;
    }

    async execute(userId, dto) {
        const endpoint = new Endpoint({
            name: dto.name,
            userId: userId,
            method: dto.method,
            slug: await this.generateUniqueSlug(),
            isActive: true,
        });

        return await this.endpointRepository.create(endpoint);
    }
};