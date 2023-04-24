const userModels = require('../models/UsersModel');
const jwt = require('jsonwebtoken');
const response = require('../response');

const loginController = async (req, res) => {
    const user = {...req.body};

    const findProducts = await userModels.findOne({
        where: {
            name: user.name
        }
    });
    if (findProducts === null) {
        response(401, null, res)
    } else {
        jwt.sign(user, 'secret', {expiresIn: '20s'}, (err, token)=>{
            response(200, token, res)
        })
    }
}

module.exports = loginController