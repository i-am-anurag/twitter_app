import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import { SALT } from "../config/serverConfig.js";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.pre('save', function (next) {
    const user = this;
    const encrytedPassword = bcrypt.hashSync(user.password, SALT);
    user.password = encrytedPassword;
    next();
})



const User = mongoose.model('User', userSchema);

export default User;