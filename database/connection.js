const sequelize = require('sequelize');
const config = require('../config/config.json')

const db = new sequelize(
    config.database,
    config.username,
    config.password,
    {
        dialect: config.dialect
    }
)

db.sync({})

module.exports = db;