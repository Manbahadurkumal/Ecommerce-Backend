const joi = require("joi")
const addToCartDTO = joi.object({
    productId : joi.String().required(),
    quantity: joi.number().min(0).required()
})

module.exports = {
    addToCartDTO
}