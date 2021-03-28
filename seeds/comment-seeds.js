const { Comment } = require('../models');

const commentData = [
    {
        user_id: 3,
        post_id: 1,
        comment_text: "Just replace the time crystals!"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "If it doesn't work, it's Physics."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "The bartender smiles and says 'For you, no charge."
    }

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;