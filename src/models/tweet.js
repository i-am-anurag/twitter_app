import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet cannot be more than 250 characters']
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like',
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ],
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

const Tweet = mongoose.model('Tweet', tweetSchema);

export default Tweet;