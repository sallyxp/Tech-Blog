const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

//create associations - 
//A user has many posts, a post can have many comments, but a post can only have one user.
//so 1:m user to post, 1:m post to comments

//create associations
User.hasMany(Post, { //one to many 
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
});

Post.belongsTo(User, { //one to one 
    foreignKey: 'user_id'
});

Comment.belongsTo(User, { //many to one 
    foreignKey: 'user_id'
  });
  
Comment.belongsTo(Post, { //one to one 
    foreignKey: 'post_id'
});
  
User.hasMany(Comment, { //one to many 
    foreignKey: 'user_id'
});
  
Post.hasMany(Comment, {//one to many 
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};