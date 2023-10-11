const createError = require('http-errors')


const badRequest = (err, res) => {
    const error = createError.BadRequest(err)
    return res.status(error.status).json({
        error: 1,
        message: error.message
    })
}

const internalServerError = (res) => {
    const error = createError.InternalServerError()
    return res.status(error.status).json({
        error: 1,
        message: error.message
    })
}

const notFound = (req,res) => {
    const error = createError.NotFound('This route does not exist!')
    return res.status(error.status).json({
        error: 1,
        message: error.message
    })
}

const notAuth = (err, res) => {
    const error = createError.Unauthorized(err)
    return res.status(error.status).json({
        error: 1,
        message: error.message
    })
}




module.exports = {
    badRequest,
    internalServerError,
    notFound,
    notAuth
}