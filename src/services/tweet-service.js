import Tweet from '../models/tweet.js';
import { TweetRepository, HashtagRepository } from '../repository/index.js'
class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(userId,data) {
        const content = data.content;
        data.createdBy = userId;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1).toLowerCase(tag)); // this regex extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
            return { title: tag, tweets: [tweet.id] }
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }

    async get(id) {
        const tweet = await this.tweetRepository.getWithComments(id);

        return tweet;
    }

    async getUserComment(userId){
        try {
            const tweets = await Tweet.find({createdBy: userId})
            .populate({
                path: 'comments',
                model: 'Comment',
                match: { isDeleted: false } // Exclude soft-deleted comments
            }).exec();
            if(tweets.length==0){
                throw new Error("No Tweets Found");
            }

            return tweets;
        } catch (error) {
            throw new Error(error);
        }
    }
}
export default TweetService;