import { IUserRepository } from "../../domain/repositories/IUserRepository.js";
import { UserModel } from "../model/UserModel.js";
import { UserMapper } from "../mappers/UserMapper.js";


export class MongoUserRepository extends IUserRepository {
    async create(user) {
        const document = await UserModel.create({
            name: user.name,
            email: user.email,
            password: user.password,
            avatar: user.avatar,
            isVerified: user.isVerified,
        });

        return UserMapper.toDomain(document);
    }

    async findByEmail(email) {
        const document = await UserModel.findOne({email}).select("+password");
        
        if(!document) return null;

        return UserMapper.toDomain(document);
    }

    async findById(id) {
        const document = await UserModel.findById(id);
        
        if(!document) return null;

        return UserMapper.toDomain(document);
    }
}