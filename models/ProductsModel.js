const sequelize = require('sequelize')
const db = require('../database/connection')

const productsModels = db.define(
    "products", 
    {
        id: {type: sequelize.INTEGER, primaryKey: true},
        name: {type: sequelize.STRING}, 
        price: {type: sequelize.INTEGER}
    }
);

module.exports = productsModels