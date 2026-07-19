export class Endpoint {
    constructor({
        id, name, userId, slug, method, isActive, createdAt, updatedAt
    }) {
        this.id = id;
        this.name = name;
        this.userId = userId;
        this.slug = slug;
        this.method = method;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
};