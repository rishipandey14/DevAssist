import bcrypt from "bcryptjs";
import { generateAccessToken } from "../../../../shared/utils/jwt.js";
import { APIError } from "../../../../config/error.js";


export class LoginUser {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(dto) {
        // check if the mail exist
        const existingUser = await this.userRepository.findByEmail(dto.email);
        if(!existingUser) throw new APIError("Invalid email.", 404)

        // check passoword
        const isPasswordValid = await bcrypt.compare(dto.password, existingUser.password);
        if (!isPasswordValid) throw new APIError("Invalid credentials.", 401);

        const accessToken = generateAccessToken({
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email
        });

        return {
            user: existingUser,
            accessToken: accessToken
        };
    }
};