const jwt = require('jsonwebtoken')
const {notAuth} = require('./handle_errors')

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization
    if (!token) return notAuth("Required Authorization" , res)
    const accessToken = token.split(" ")[1]

    // extract the access token
    jwt.verify(accessToken , process.env.JWT_SECRET, (err, user) => {
        if(err) return notAuth("Token is invalid or expired!" ,res)
        req.user = user

        next()
    })
}

module.exports = verifyToken