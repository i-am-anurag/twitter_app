import express from 'express';
import bodyParser from 'body-parser';
import { connect, PORT } from './config/serverConfig.js';
import TweetService from './services/tweet-service.js';
import apiRoutes from '../src/routes/index.js';
const app = express();

app.listen(PORT, async () => {
    console.log('Server is running on port No:', PORT);
    await connect();
    console.log("Mongo db is connected");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);
});