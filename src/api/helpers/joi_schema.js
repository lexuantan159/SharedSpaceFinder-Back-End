const joi = require('joi');
const {allow} = require("joi");

const email = joi.string().pattern(new RegExp('gmail.com$')).required()
const password = joi.string().min(6).max(30).required()


module.exports = {
    email,
    password
}