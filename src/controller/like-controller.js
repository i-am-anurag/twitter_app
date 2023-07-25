import { LikeService } from "../services/index.js";
const likeService = new LikeService();

export const toggleLike = (req, res) => {
    try {
        const response = likeService.toggleLike(req.query.onModel, req.query.modelType, req.body.userId);


        return res.status(200).json({
            sucess: true,
            message: "Successfully toggled like",
            data: response,
            error: {},
        });
    } catch (error) {
        console.log("The Error message is:", error.message);
        return res.status(500).json({
            sucess: false,
            message: "Something went wrong in toggle like",
            data: {},
            error,
        });
    }
}