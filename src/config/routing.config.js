
const mainRoute = require('express').Router()

// Route import

const authRoute = require("../modules/Auth/auth.router")
const userRoute = require("../modules/User/user.router")

mainRoute.use('/auth', authRoute)
mainRoute.use('/user', userRoute)

// 400, 422, 401, 403, 404, 200, 204


module.exports = mainRoute
