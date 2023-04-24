const productsModels = require('../models/ProductsModel')
const response = require('../response')

const getData = async (req, res)=>{
    try{
        const ProductsModel = await productsModels.findAll();
        const products = ProductsModel.map(item => item.dataValues);
        response(200, products, res);
    }catch(err){
        response(204, null, res);
    }
}

module.exports = getData;
