const joi = require("joi")
const ProductCreateDTO = joi.object({
    title: joi.string().min(3).required(),
    summary: joi.string().required(),
    description: joi.string().allow(null, "").optional().default(null),
    price: joi.number().min(100).required(),
    discount: joi.number().min(0).max(90).optional().default(0),
    categories: joi.array().items(joi.string()).allow(null, "").optional().default(null),
    brand: joi.string().required().allow(null, "").optional().default(null),
    isFeatured: joi.boolean().default(false),
    sellerId: joi.string().allow(null, "").default(null),
    status: joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    images: joi.array().items(joi.string().allow(null, "")).allow(null, "").optional().default(null)
    
    
})
const ProductUpdateDTO = joi.object({
    title: joi.string().min(3).required(),
    summary: joi.string().required(),
    description: joi.string().allow(null, "").optional().default(null),
    price: joi.number().min(100).required(),
    discount: joi.number().min(0).max(90).optional().default(null),
    categories: joi.array().items(joi.string()).allow(null, "").optional().default(null),
    brand: joi.string().required().allow(null, "").optional().default(null),
    isFeatured: joi.boolean().default(false),
    sellerId: joi.string().allow(null, "").default(null),
    status: joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    images: joi.array().items(joi.string().allow(null, "")).allow(null, "").optional().default(null)
    
})
module.exports = {
    ProductCreateDTO,
    ProductUpdateDTO
}