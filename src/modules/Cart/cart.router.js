const cartRouter = require("express").Router()
const auth = require("../../middleware/auth.middleware")
const allowRole = require("../../middleware/rbac.middleware")
const { bodyValidator } = require("../../middleware/validator.middleware");
const cartDetailCtrl = require("./cartDetail.controller");
const { addToCartDTO } = require("./cartDetail.dto");


cartRouter.route('/')
    .post(
        auth, 
        allowRole('admin','customer'), 
         
        bodyValidator(addToCartDTO),
        cartDetailCtrl.addToCart()
    )
module.exports = cartRouter