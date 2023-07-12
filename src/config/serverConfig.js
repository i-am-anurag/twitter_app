import dotenv from 'dotenv';
import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

dotenv.config();

const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_db');
};

export { connect };
export const PORT = process.env.PORT;
