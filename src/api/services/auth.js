const db = require('../models')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8))


const register = async ({email, password}) => {
    try {
        const [user, created] = await db.User.findOrCreate({
            where: {email: email},
            defaults: {
                email: email,
                password: hashPassword(password)
            }
        })
        //generate token
        const token = created ? jwt.sign({
            id: user.id,
            email: user.email,
            role_code: user.role_code
        }, process.env.JWT_SECRET, {expiresIn: '5d'}) : null


        return {
            errors: created ? 0 : 1,
            messages: created ? "Registered successfully" : "Email already registered",
            accessToken: token ? `Bearer ${token}` : null
        }
    } catch (error) {
        return error
    }
}


const login = async ({email, password}) => {
    try {
        const response = await db.User.findOne({
            where: {email: email},
            raw: true
        })
        // check hash password
        const isChecked = response && bcrypt.compareSync(password, response.password)
        //generate token when the correct password
        const token = isChecked ? jwt.sign({
            id: response.id,
            email: response.email,
            role_code: response.role_code
        }, process.env.JWT_SECRET, {expiresIn: '5d'}) : null


        return {
            errors: response ? 0 : 1,
            messages: response ? "Login successfully!" : response ? "Password is wrongs!" : "Email hasn't registered!" ,
            accessToken: token ? `Bearer ${token}` : null
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    register,
    login
}