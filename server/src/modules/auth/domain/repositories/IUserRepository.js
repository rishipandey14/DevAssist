export class IUserRepository {
    async create(user) {
        throw new Error("Method create() must be implemented");
    }
    
    async findByEmail(eamil){}
    
    async findById(id){}
};