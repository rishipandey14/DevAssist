export class RegisterDTO {
    constructor(body){
        this.name = body.name;
        this.email = body.email;
        this.password = body.password;
        this.avatar = body.avatar;
        this.isVerified = body.isVerified;

    }
};