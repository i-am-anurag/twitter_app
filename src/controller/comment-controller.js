import CommentService from "../services/comment-service.js";
const commentService = new CommentService();

export const createComment = async (req, res) => {
    console.log("The create tweet functin is called");
    try {
        const response = await commentService.createComment(req.query.onModel, req.query.modelType, req.body.userId, req.body.content);

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