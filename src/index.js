import express from 'express';
import { connect, PORT } from './config/serverConfig.js';
import TweetService from './services/tweet-service.js';
const app = express();

const serverStart = () => {
    app.listen(PORT, async () => {
        console.log('Server is running on port No:', PORT);
        await connect();
        console.log("Mongo db is connected");
        let service = new TweetService();

        service.create({
            content: "This is my #Second tweet",
        })
    });
}

serverStart();