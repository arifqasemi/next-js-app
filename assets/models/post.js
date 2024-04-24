const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');
const Comment = require('./comment');

const POST = sequelize.define('POST', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type:  DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  // Other fields
});
POST.hasMany(Comment, {
  foreignKey: 'postId', 
  onDelete: 'CASCADE', 
});
module.exports = POST;
