const joi = require("joi")
const AddToCartDTO = joi.object({
    productId : joi.string().required(),
    quantity: joi.number().min(0).required()
})
const PlaceOrderDTO = joi.object({
    cartId: joi.array().items(joi.string().required()).required(),
    discount: joi.number().empty(null, "").optional().default(0),
})
module.exports = {
    AddToCartDTO,
    PlaceOrderDTO
}