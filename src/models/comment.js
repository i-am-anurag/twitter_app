const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
    },
},{timestamps: true});

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;