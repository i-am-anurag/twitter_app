import { Router } from "express";
import { creatTweet, getTweet, getUserTweet } from '../../controller/tweet-controller.js';
import { toggleLike } from "../../controller/like-controller.js";
import { createComment, deleteComment } from "../../controller/comment-controller.js";
import { signUp, singin } from "../../controller/user-controller.js";
import { authenticate } from "../../middleware/auth-middleware.js";

const router = new Router();

router.post('/signup', signUp);
router.post('/signin', singin);

router.post('/tweet', authenticate, creatTweet);
router.post('/likes/toggle', authenticate, toggleLike);
router.post('/comment', authenticate, createComment);
router.get('/tweet/:id', authenticate, getTweet);
router.get('/tweet',authenticate,getUserTweet);
router.delete('/comment/:commentId',authenticate,deleteComment);

export default router;