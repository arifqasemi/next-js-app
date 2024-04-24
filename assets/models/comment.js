// models/Comment.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Other fields
});

module.exports = Comment;
