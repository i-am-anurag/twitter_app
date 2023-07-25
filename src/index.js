import express from 'express';
import bodyParser from 'body-parser';
import { connect, PORT } from './config/serverConfig.js';
import apiRoutes from '../src/routes/index.js';
import { UserRepository, TweetRepository } from './repository/index.js';
import { LikeService, } from './services/index.js';
const app = express();

app.listen(PORT, async () => {
    console.log('Server is running on port No:', PORT);
    await connect();
    console.log("Mongo db is connected");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);
    const tweet_repo = new TweetRepository();
    const user_repo = new UserRepository();
    const user = await user_repo.getAll();
    const tweet = await tweet_repo.getAll(0, 10);
    const Like = new LikeService();
    await Like.toggleLike(tweet[0].id, 'Tweet', user[0].id);
});