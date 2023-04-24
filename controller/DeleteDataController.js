const productsModels = require('../models/ProductsModel')
const response = require('../response')

const deleteData = async (req, res)=>{
    const id = req.params.id
    try{
        const deletedData = await productsModels.destroy({
            where: {
                id: id
            }
        })
        console.log(deletedData);
        (deletedData > 0) ? response(200, deletedData, res) : response(500, "data tidak ada", res);
    }catch(err){
        response(400, null, res)
    }
}

module.exports = deleteData;
