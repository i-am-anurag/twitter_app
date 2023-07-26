import { Router } from "express";
import { creatTweet, getTweet } from '../../controller/tweet-controller.js';
import { toggleLike } from "../../controller/like-controller.js";
import { createComment } from "../../controller/comment-controller.js";

const router = new Router();

router.post('/tweet', creatTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comment', createComment);
router.get('/tweet/:id', getTweet);

export default router;