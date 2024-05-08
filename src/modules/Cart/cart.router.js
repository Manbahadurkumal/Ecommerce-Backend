
const cartRouter = require("express").Router()
const auth = require("../../middleware/auth.middleware")
const allowRole = require("../../middleware/rbac.middleware")
const { bodyValidator } = require("../../middleware/validator.middleware")
const cartDetailCtrl = require("./cart-detail.controller")
const {AddToCartDTO, PlaceOrderDTO} = require("./cart-detail.dto")

cartRouter.post('/add-to-cart', auth, allowRole(['admin', 'customer']), bodyValidator(AddToCartDTO), cartDetailCtrl.addToCart);
cartRouter.get('/my-cart-list', auth, allowRole(['admin', 'customer']), cartDetailCtrl.listCart);
cartRouter.post('/place-order', auth, allowRole(['admin', 'customer']), bodyValidator(PlaceOrderDTO), cartDetailCtrl.placeOrder);
cartRouter.get("/my-order", auth, allowRole(['admin', 'customer']), cartDetailCtrl.listMyOrder)
cartRouter.get("/my-order-list", auth, allowRole(['seller']), cartDetailCtrl.myOrderList)
cartRouter.get("/order-complete/:id", auth, allowRole(['admin', 'seller']), cartDetailCtrl.updateOrderStatus)


module.exports = cartRouter;
