const jwt = require('jsonwebtoken');
const response = require('../response');

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');

    if (!token) response(401, 'denied', res)

    try {
        const verifikasi = jwt.verify(token, 'secret');
        req.user = verifikasi;
        next()
    } catch (err) {
        response(401, 'Invalid Token', res)
    }
}

module.exports = verifyToken