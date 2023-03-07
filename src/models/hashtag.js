const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
    title:{
        type: String,
    },
    tweets: [{
        type: mongoose.Schema.Types.ObjectId,
    }],
},{timestamps: true});

const Hashtag = mongoose.model('Hashtag',hashtagSchema);
module.exports = Hashtag;