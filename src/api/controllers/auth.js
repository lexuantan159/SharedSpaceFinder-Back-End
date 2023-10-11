const authService = require('../services/auth')
const {internalServerError , badRequest} = require('../middlewares/handle_errors')
const joi = require('joi')
const {email, password} = require('../helpers/joi_schema')

const register = async (req, res) => {
    try {
        const {error} = joi.object({email,password}).validate(req.body)
        if(error) return badRequest(error.details[0]?.message , res)

        const  response = await authService.register(req.body);
        return  res.status(200).json(response)
    }catch (error) {
        return internalServerError(res)
    }
}

const login = async (req, res) => {
    try {
        const {error} = joi.object({email,password}).validate(req.body)
        if(error) return badRequest(error.details[0]?.message , res)

        const  response = await authService.login(req.body);
        return  res.status(200).json(response)
    }catch (error) {
        return internalServerError(res)
    }
}

module.exports = {
    register,
    login
}