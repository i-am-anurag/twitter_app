import UserRepository from "../repository/user-repository.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_KEY } from "../config/serverConfig.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async getByEmail(email) {
        console.log(email);
        const response = await this.userRepository.findBy({ email });

        return response;
    }
    async signUp(data) {
        const user = await this.userRepository.createOne(data);

        return user;
    }

    async singin(data) {
        const user = await this.getByEmail(data.email);
        
        if (!user) {
            throw Error("User not found");
        }

        const passwordMatch = bcrypt.compareSync(data.password, user.password);
        if (!passwordMatch) {
            throw Error('Password does not match');
        }
        const token = jwt.sign({ user }, JWT_KEY, { expiresIn: '1d' });

        return token;
    }
};

export default UserService;