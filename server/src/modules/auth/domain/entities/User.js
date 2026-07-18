export class User {
    constructor({
        id,
        name,
        email,
        password,
        avatar,
        isVerified,
        createdAt,
        updatedAt
    }){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.isVerified = isVerified;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
};