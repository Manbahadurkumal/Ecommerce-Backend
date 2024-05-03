const joi = require("joi")
const BrandCreateDTO = joi.object({
    title: joi.string().min(3).required(),
    status: joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    homeSection: joi.boolean().default(false),
    image: joi.string().empty(null, "").optional().default(null),
    
})
const BrandUpdateDTO = joi.object({
    title: joi.string().min(3).required(),
    status: joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image: joi.string().empty(null, "").optional().default(null),
    homeSection: joi.boolean().default(false)

})
module.exports = {
    BrandCreateDTO,
    BrandUpdateDTO
}