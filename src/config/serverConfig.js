import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

mongoose.set('strictQuery', false);

dotenv.config();

const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_db');
};
const PORT = process.env.PORT;
const JWT_KEY = process.env.JWT_KEY;
const SALT = bcrypt.genSaltSync(9);

export {
    connect,
    PORT,
    JWT_KEY,
    SALT,
}
