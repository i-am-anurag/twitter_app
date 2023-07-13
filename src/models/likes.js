import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        enum: ['Comment', "Tweet"],
        required: true
    },
    likeable: {
        tyep: mongoose.Schema.Types.ObjectId,
        required: true,
        refpath: 'onModel',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
}, { timestamps: true });

const Like = mongoose.model('Like', likeSchema);

export default Like;