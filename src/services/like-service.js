import { LikeRepository, TweetRepository } from "../repository/index.js";


class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.TweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        if (modelType == 'Tweet') {
            var likeable = await this.TweetRepository.find(modelId);
        } else if (modelType == 'Comment') {
            //ToDo something
        } else {
            throw new Error('Invalid Model Type');
        }

        const exist = await this.likeRepository.findByUserAndLikeable({
            onModel: modelType,
            likeable: likeable.id,
            user: userId,
        });

        if (exist) {
            likeable.likes.pull(exist.id);
            await likeable.save();
            await exist.remove();
            var isAdded = false;
        }
        else {
            const newLike = this.likeRepository.createOne({
                onModel: modelType,
                likeable: modelId,
                user: userId,
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }

        return isAdded;
    }
}

export default LikeService;