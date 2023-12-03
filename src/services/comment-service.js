import Comment from "../models/comment.js";
import { CommentRepository, TweetRepository } from "../repository/index.js";

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async createComment(modelId, modelType, userId, content) {
        try {
            // console.log("add comment data:",modelId, modelType, userId, content);
            if (modelType == 'Tweet') {
                var commentable = await this.tweetRepository.get(modelId);
            }
            else if (modelType == 'Comment') {
                var commentable = await this.commentRepository.get(modelId);
            }
            else {
                throw new Error("Invalid model type");
            }
            console.log("The Value of commentable is:", commentable);
            const comment = await this.commentRepository.createOne({
                content: content,
                userId: userId,
                onModel: modelType,
                commentable: modelId,
                comments: [],
            });
            commentable.comments.push(comment);
            await commentable.save();

            return comment;   
        } catch (error) {
            console.log(error);
        }
    }

    async deleteComment(commentId,userId){
        try {
            console.log("Delete comment Function called");
            const comment = await Comment.findById(commentId).populate('commentable');
            if (comment.userId.equals(userId) || comment.commentable.userId.equals(userId)) {
                // Soft-delete the comment
                comment.isDeleted = true;
                await comment.save();
            } else {
                throw new Error('Unauthorized to delete the comment');
            }

            return comment;
        } catch (error) {
            console.log(error.message);
            throw new Error(error.message);
        }
    }
}

export default CommentService;