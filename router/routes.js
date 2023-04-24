const express = require('express')
const route = express.Router()
const getDataController = require('../controller/GetData')
const addDataController = require('../controller/AddDataController')
const updateDataController = require('../controller/UpdateDataController')
const deleteDataController = require('../controller/DeleteDataController')
const loginController = require('../controller/LoginController')
const verifyToken = require('../middleware/VerifyToken')


route.get('/', verifyToken, getDataController)
route.post('/login', loginController)

route.post('/', verifyToken, addDataController)

route.put('/:id', verifyToken, updateDataController)

route.delete('/:id', verifyToken, deleteDataController)

module.exports = route