import { APIError } from "../../../../config/error.js";

export class GetMeUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(id) {
        const user = await this.userRepository.findById(id);
        if(!user) throw new APIError("User not Found.", 404);

        return {
            user: user
        };
    }
};