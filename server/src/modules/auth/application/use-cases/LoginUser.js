import bcrypt from "bcryptjs";
import { generateAccessToken } from "../../../../shared/utils/jwt.js";


export class LoginUser {
    constructor(userRepository) {
        this.userRepository = userRepository
    }

    async execute(dto) {
        // check if the mail exist
        const existingUser = await this.userRepository.findByEmail(dto.email);
        if(!existingUser) throw new Error("Invalid Email id.");

        // check passoword
        const isPasswordValid = await bcrypt.compare(dto.password, existingUser.password);
        if (!isPasswordValid) throw new Error("Invalid credentials.");

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