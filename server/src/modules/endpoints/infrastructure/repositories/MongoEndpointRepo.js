import { IEndpointRepository } from "../../domain/Repository/IEndpointRepository.js"
import { Endpoint } from "../models/endpoint.js"


export class mongoEndpointRepository extends IEndpointRepository {
    async create(endpoint) {
        const document = await Endpoint.create({
            name: endpoint.name,
            userId: endpoint.userId,
            slug: endpoint.slug,
            method: endpoint.method,
            isActive: true
        });

        return document;
    }

    async findBySlug(slug) {
        return await Endpoint.findOne({slug: slug})
    }
};