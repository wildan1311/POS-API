const productsModels = require('../models/ProductsModel')
const response = require('../response')

const updateData = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try {
        const updatedData = await productsModels.update({
            name: data.name,
            price: data.price
        }, {
            where: {
                id: id
            }
        })
        response(200, updatedData, res);
    } catch (err) {
        response(400, null, res)
    }
}

module.exports = updateData;