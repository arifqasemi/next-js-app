const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('u958331791_nextJs_databas', 'u958331791_nextJsAppDB', 'Indonesia12345@', {
    host: '191.101.230.1',
    dialect:'mysql',
    dialectModule: require('mysql2'),
  });
  
  module.exports = sequelize;