const joi = require("joi")

const registerDTO = joi.object({
    name: joi.string().min(2).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
    role: joi.string().pattern(/^(seller|customer|admin)$/)
})
const loginDTO = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})
module.exports = {registerDTO, loginDTO}