const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
    id: { //how the comment will be indentified 
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true
    },
    user_id: { //the id of the user who left the comment 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id'
      }
    },
    post_id: { //the id of the post the comment was left on 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    comment_text: { //the text of the comment, validate to ensure comment has atleast 1 character 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;