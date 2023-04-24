const statusMessages = {
    200: 'success',
    204: 'Data Not Found',
    201: 'data is inserted',
    401: 'unathorized'
}

const response = (statusCode, datas, res)=>{
    return res.status(statusCode).json({
        message: statusMessages[statusCode],
        datas: datas,
    });
}

module.exports = response;