import { LoginDTO } from "../../application/dto/LoginDTO.js";
import { RegisterDTO } from "../../application/dto/RegisterDTO.js";
import { UserMapper } from "../../infrastructure/mappers/UserMapper.js";


export class AuthController {
    constructor({registerUser, loginUser, getUser}) {
        this.registerUser = registerUser;
        this.loginUser = loginUser;
        this.getUser = getUser;
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
    };

    login = async (req, res, next) => {
        try {
            const dto = new LoginDTO(req.body);
            const result = await this.loginUser.execute(dto);

            return res.status(200).json({
                success: true,
                message: "User Logged in successfully",
                data: {
                    user: UserMapper.toResponse(result.user),
                    accessToken: result.accessToken
                }
            })
        } catch (error) {
            next(error);
        }
    };

    getMe = async (req, res, next) => {
        try {
            const result = await this.getUser.execute(req.user.id);

            return res.status(200).json({
                success: true,
                message: "User's data fetched successfully",
                data: {
                    user: result.user
                }
            });
        } catch (error) {
            next(error);
        }
    }
}