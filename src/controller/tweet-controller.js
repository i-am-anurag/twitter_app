import TweetService from "../services/tweet-service.js";
const tweetService = new TweetService();

export const creatTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            sucess: true,
            message: "Successfully created the tweet",
            data: response._doc,
            error: {},
        })
    } catch (error) {
        console.log("The Error message is:", error.message);
        return res.status(500).json({
            sucess: false,
            message: "Something went wrong",
            data: {},
            error,
        })
    }
}