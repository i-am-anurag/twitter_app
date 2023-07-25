import { Router } from "express";
import { creatTweet } from '../../controller/tweet-controller.js';
import { toggleLike } from "../../controller/like-controller.js";

const router = new Router();

router.post('/tweet', creatTweet);
router.post('/likes/toggle', toggleLike);

export default router;