const joi = require("joi")
const categoryCreateDTO = joi.object({
    title: joi.string().min(3).required(),
    status: joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image: joi.string().empty(null, "").optional().default(null),
    parentId: joi.string().allow(null, "").default(null)
})
const categoryUpdateDTO = joi.object({
    title: joi.string().min(3).required(),
    status: joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image: joi.string().empty(null, "").optional().default(null),
    parentId: joi.string().allow(null, "").default(null)    
})
module.exports = {
    categoryCreateDTO,
    categoryUpdateDTO
}