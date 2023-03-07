const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter_db');
}

module.exports = {
    connect:connect,
    PORT: process.env.PORT,
};