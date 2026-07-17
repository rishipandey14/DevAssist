export class GetMeUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(id) {
        const user = await this.userRepository.findById(id);
        if(!user) throw new Error("User not Found.");

        return {
            user: user
        };
    }
};