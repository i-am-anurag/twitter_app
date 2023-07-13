import { Router } from "express";
import { creatTweet } from '../../controller/tweet-controller.js';

const router = new Router();

router.post('/tweet', creatTweet);

export default router;