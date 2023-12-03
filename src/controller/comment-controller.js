import CommentService from "../services/comment-service.js";
const commentService = new CommentService();

const createComment = async (req, res) => {
    try {
        const userId = req.user._id;
        const {onModel,modelType,content} = {...req.query,...req.body};
        const response = await commentService.createComment(onModel,modelType,userId,content);
        console.log("response=========>",response);

        return res.status(201).json({
            sucess: true,
            message: "Successfully added comment sucessfully",
            data: response,
            error: {},
        });
    } catch (error) {
        console.log("There is an error to add comment", error.message);
        return res.status(500).json({
            sucess: true,
            message: "There is an error to add comment",
            data: {},
            error: {},
        });
    }
}

const deleteComment = async(req,res)=>{
    try {
        const userId = req.user._id;
        const commentId = req.params.commentId;
        const response = await commentService.deleteComment(commentId,userId);

        return res.status(200).json({
            sucess: true,
            message: "Successfully deleted comment sucessfully",
            data: response,
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            sucess: true,
            message: "There is an error to delete comment",
            data: {},
            error:error,
        });
    }
}

export {
    createComment,
    deleteComment,
}