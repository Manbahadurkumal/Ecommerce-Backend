const express = require("express")
const mainRoute = express.Router()

// Route import

const authRoute = require("../modules/Auth/auth.router")
const userRoute = require("../modules/User/user.router")

mainRoute.use('/auth', authRoute)
mainRoute.use('/user', userRoute)

// 400, 422, 401, 403, 404, 200, 204
//Eror 404
mainRoute.use("/", (request, response, next)=>{
    // next()
    // next({})
    response.status(404).json({
        result:"any",
        message: "Resource not found",
        meta:null
    })
})
module.exports = mainRoute
