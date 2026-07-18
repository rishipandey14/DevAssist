import bcrypt from "bcryptjs";
import { User } from "../../domain/entities/User.js";
import { generateAccessToken } from "../../../../shared/utils/jwt.js";
import { APIError } from "../../../../config/error.js";



export class RegisterUser {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(dto) {
        // check if mail already exist
        const existingUser = await this.userRepository.findByEmail(dto.email);

        if(existingUser) throw new APIError(`User already exists`, 409)

        // hash password
        const hashedPassword = await bcrypt.hash(dto.password, 12);

        // create Domain User
        const user = new User({
            name: dto.name,
            email: dto.email,
            password: hashedPassword,
            avatar: dto.avatar,
            isVerified: false
        });

        // save User
        const savedUser = await this.userRepository.create(user);

        // generates jwt
        const accessToken = generateAccessToken({
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email
        });

        return {
            user: savedUser,
            accessToken: accessToken
        };
    }
};