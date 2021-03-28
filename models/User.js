const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: { //user id
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: { //username
            type: DataTypes.STRING,
            allowNull: false
        },
        email: { //email, & validation is an  "email@email.com"
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: { //password - XXXXX will need to do more with this
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
},
    {   
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
    }
);

module.exports = User;