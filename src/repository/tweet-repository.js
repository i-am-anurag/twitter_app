const Tweet = require('../models/tweet');

class TweetRepository{
    async create(data){
        try {
            const tweet = await Tweet.create(data);

            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(tweetId){
        try {
            const data = await Tweet.findById(tweetId);
            
            return data;   
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id)
    {
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();

            return tweet
        } catch (error) {
            console.log(error);
        }
    }

    async update(tweetId, data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data,{new:true});

            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id){
        try {
            const tweet = await Tweet.findByIdAndRemove(id);

            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}


module.exports = TweetRepository;