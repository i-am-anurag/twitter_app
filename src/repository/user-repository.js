import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";

class UserRepository extends CrudRepository {
    constructor() {
        super(User);
    }

    async findBy(data) {
        const response = await User.findOne(data);

        return response;
    }
};

export default UserRepository;