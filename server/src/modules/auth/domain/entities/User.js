export class User {
    constructor({
        id,
        name,
        email,
        password,
        avatar,
        isVerified
    }){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.isVerified = isVerified;
    }
};