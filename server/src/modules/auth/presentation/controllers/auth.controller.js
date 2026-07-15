import { RegisterDTO } from "../../application/dto/RegisterDTO.js";
import { UserMapper } from "../../infrastructure/mappers/UserMapper.js";


export class AuthController {
    constructor(registerUser) {
        this.registerUser = registerUser;
    }

    register = async (req, res, next) => {
        try {
            const dto = new RegisterDTO(req.body);

            const result = await this.registerUser.execute(dto);

            return res.status(201).json({
                success: true,
                message: "User Registered Successfully",
                data: {
                    user: UserMapper.toResponse(result.user),
                    accessToken: result.accessToken
                }
            });
        } catch (error) {
            next(error);
        }
    }
}