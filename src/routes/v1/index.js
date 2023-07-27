import { Router } from "express";
import { creatTweet, getTweet } from '../../controller/tweet-controller.js';
import { toggleLike } from "../../controller/like-controller.js";
import { createComment } from "../../controller/comment-controller.js";
import { signUp, singin } from "../../controller/user-controller.js";

const router = new Router();

router.post('/signup', signUp);
router.post('/signin', singin);

router.post('/tweet', creatTweet);
router.post('/likes/toggle', toggleLike);
router.post('/comment', createComment);
router.get('/tweet/:id', getTweet);

export default router;