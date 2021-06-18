const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
      id: { //how the post will be identified 
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: { //name
        type: DataTypes.STRING,
        allowNull: false
      },
      title: { //title of the post 
        type: DataTypes.STRING,
        allowNull: false
      },
      description: { //content of the post 
        type: DataTypes.TEXT,
        allowNull: true
      },
      date_created: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      user_id: { //the id of the user who wrote the post 
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
  );

  module.exports = Post;