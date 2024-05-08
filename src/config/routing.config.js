
const mainRoute = require('express').Router()

// Route import

const authRoute = require("../modules/Auth/auth.router")
const userRoute = require("../modules/User/user.router")
const bannerRouter = require("../modules/Banners/banner.router")
const brandRouter = require("../modules/Brands/brand.router")
const categoryRouter = require("../modules/Categories/category.router")
const productRouter = require("../modules/Products/product.router")
const cartRouter = require("../modules/cart/cart.router")

mainRoute.use('/auth', authRoute)
mainRoute.use('/user', userRoute)
mainRoute.use('/banner', bannerRouter)
mainRoute.use('/brand', brandRouter)
mainRoute.use("/category", categoryRouter )
mainRoute.use("/product", productRouter)
mainRoute.use("/order", cartRouter)
// 400, 422, 401, 403, 404, 200, 204


module.exports = mainRoute
