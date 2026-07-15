import { MongoUserRepository } from "./infrastructure/repository/MongoUserRepository.js";
import { RegisterUser } from "./application/use-cases/RegisterUser.js";
import { AuthController } from "./presentation/controllers/auth.controller.js";

const repository = new MongoUserRepository();

const registerUser = new RegisterUser(repository);

export const authController = new AuthController(registerUser);