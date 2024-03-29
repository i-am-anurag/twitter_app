import Tweet from '../models/tweet.js'
import Comment from '../models/comment.js';
import CrudRepository from './crud-repository.js';
class TweetRepository extends CrudRepository {
    constructor() {
        super(Tweet);
    }
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' }).lean();
            tweet.comments = await this.#populateNestedComments(tweet.comments);

            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async #populateNestedComments(comments) {
        const populatedComments = await Comment.populate(comments, {
            path: 'comments',
            options: { lean: true },
        })

        for (const comment of populatedComments) {
            if (comment.comments.length > 0) {
                comment.comments = await this.#populateNestedComments(comment.comments);
            }
        }

        return populatedComments;
    }

    async find(id) {
        try {
            const result = await Tweet.findById(id).populate('likes');

            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

export default TweetRepository;