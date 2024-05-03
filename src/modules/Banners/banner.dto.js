const joi = require("joi")
const BannerCreateDTO = joi.object({
    title: joi.string().min(3).required(),
    link: joi.string().uri().empty(null, "").optional().default(null),
    status: joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image: joi.string().empty(null, "").optional().default(null)
})
const BannerUpdateDTO = joi.object({
    title: joi.string().min(3).required(),
    link: joi.string().uri().empty(null, "").optional().default(null),
    status: joi.string().pattern(/^(active|inactive)$/).default('inactive'),
    image: joi.string().empty(null, "").optional().default(null)
})
module.exports = {
    BannerCreateDTO,
    BannerUpdateDTO
}