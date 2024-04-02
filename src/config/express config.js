const express = require('express')
const app = express();
const mainRoute = require("./routing.config")
const router = express.Router()
app.get('health', (req, res, next)=>{
    //res.end("hello")
    res.json({
        result: "hello there",
        message: "sucess Ok",
        meta: null
    })
})
app.use(router)
//routing mount
app.use(mainRoute)
//Eror 404
app.use((request, response, next)=>{
    // throw new Error ({message: "Resource not found", code: 404})
    next({code: 404, message:"Resource Not Found"})
})
// Error handling middleware
app.use((error, req, res, next)=>{
    const statusCode = error.code || 500; //internal server error
    const data = error.data || null;
    const msg = error.message || "Internal server error";
    //error response
    res.status(statusCode).json({          
        //error code 422 ==> pass object in result
        result: data,
        message: msg,
        meta: null
    })
})
// in use if i send url then it is response
// if i send call back then it is request
module.exports = app;