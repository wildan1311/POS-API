const sequelize = require('sequelize')
const db = require('../database/connection')

const userModels = db.define(
    "user", 
    {
        id: {type: sequelize.INTEGER, primaryKey: true},
        name: {type: sequelize.STRING}, 
        password: {type: sequelize.INTEGER}
    }
);

module.exports = userModels