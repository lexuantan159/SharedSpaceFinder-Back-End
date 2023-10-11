const {notAuth} = require('./handle_errors')


const isAdmin = (req , res , next) => {
    const {role_code} = req.user
    if(role_code !== "R1") return notAuth("Required Role Admin", res)
    next()
}

const isModeratorOrAdmin = (req , res , next) => {
    const {role_code} = req.user
    if(role_code !== "R1" && role_code !== "R2") return notAuth("Required Role Admin Or Moderator ", res)
    next()
}

const isUser = (req , res , next) => {
    const {role_code} = req.user
    if(role_code !== "R2") return notAuth("Required role Admin", res)
    next()
}

module.exports = {
    isAdmin,
    isModeratorOrAdmin,
    isUser
}