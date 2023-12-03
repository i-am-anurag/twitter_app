import TweetService from "../services/tweet-service.js";
const tweetService = new TweetService();

export const creatTweet = async (req, res) => {
    try {
        const userId = req.user._id;
        const data = {...req.body}
        const response = await tweetService.create(userId,data);
        return res.status(201).json({
            sucess: true,
            message: "Successfully created the tweet",
            data: response,
            error: {},
        })
    } catch (error) {
        console.log("The Error message is:", error.message);
        return res.status(500).json({
            sucess: false,
            message: "Something went wrong",
            data: {},
            error,
        });
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);

        return res.status(200).json({
            sucess: true,
            message: "Successfully get tweet",
            data: response,
            error: {},
        });
    } catch (error) {
        console.log("There is an error to get tweet id", error.message);
        return res.status(500).json({
            sucess: false,
            message: "There is an error to get tweet",
            data: {},
            error: error,
        });
    }
}

export const getUserTweet = async(req,res)=>{
    try {
        const {userId} = {...req.query};
        const tweets = await tweetService.getUserComment(userId);
        console.log('User tweet called');
        return res.status(200).json({
            sucess: true,
            message: "Successfully get users tweet",
            data: tweets,
            error: {},
        })
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            message: "There is an error to get users tweet",
            data: {},
            error: error,
        });
    }
}