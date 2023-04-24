const productsModels = require('../models/ProductsModel')
const response = require('../response')

const addData = async (req, res)=>{
    const data = req.body
    try{
        const datareturn = await productsModels.create({
            id: 100,
            name: data.name,
            price: data.price
        })
        response(201, datareturn, res);
    }catch(err){
        response(400, null, res)
    }
}

module.exports = addData;
