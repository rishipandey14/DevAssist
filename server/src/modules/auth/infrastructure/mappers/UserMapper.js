import { User } from "../../domain/entities/User.js";


export class UserMapper {
    static toDomain(userDocument) {
        if(!userDocument) return null;

        return new User({
            id: userDocument._id.toString(),
            name: userDocument.name,
            email: userDocument.email,
            password: userDocument.password,
            avatar: userDocument.avatar,
            isVerified: userDocument.isVerified,
            createdAt: userDocument.createdAt,
            updatedAt: userDocument.updatedAt
        });
    }

    static toResponse(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            isVerified: user.isVerified,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    }
};
