import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import { connect, PORT } from './config/serverConfig.js';
import { passportAuth } from './config/jwt-middleware.js';
import apiRoutes from '../src/routes/index.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use(passport.initialize());
passportAuth(passport);

app.listen(PORT, async () => {
    console.log('Server is running on port No:', PORT);
    await connect();
    console.log("Mongo db is connected");
});