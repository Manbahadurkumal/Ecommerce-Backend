
const mainRoute = require('express').Router()

// Route import

const authRoute = require("../modules/Auth/auth.router")
const userRoute = require("../modules/User/user.router")
const bannerRouter = require("../modules/Banners/banner.router")
const categoryRouter = require("../modules/Categories/categories.router")
mainRoute.use('/auth', authRoute)
mainRoute.use('/user', userRoute)
mainRoute.use('/banner', bannerRouter)
mainRoute.use("/category", categoryRouter )
// 400, 422, 401, 403, 404, 200, 204


module.exports = mainRoute
