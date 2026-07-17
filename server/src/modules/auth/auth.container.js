import { MongoUserRepository } from "./infrastructure/repository/MongoUserRepository.js";
import { RegisterUser } from "./application/use-cases/RegisterUser.js";
import { AuthController } from "./presentation/controllers/auth.controller.js";
import { LoginUser } from "./application/use-cases/LoginUser.js";
import { GetMeUser } from "./application/use-cases/getMeUser.js";

const repository = new MongoUserRepository();

const registerUser = new RegisterUser(repository);
const loginUser = new LoginUser(repository);
const getUser = new GetMeUser(repository);

export const authController = new AuthController({registerUser, loginUser, getUser});