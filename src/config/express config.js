const express = require('express');
require("./db.config");
const helmet = require("helmet")
const cors = require("cors")
const app = express();
app.use(helmet())
app.use(cors())
const joi = require("joi")
const mainRoute = require("./routing.config")
const router = express.Router()
//throttle 
//sanitization =>helmet
//body parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//static middleware
app.use('/assets', express.static('./public/images'))
app.get('/health', (req, res, next)=>{
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
    let statusCode = error.code || 500; //internal server error
    let data = error.data || null;
    let msg = error.message || "Internal server error";

    if(error instanceof joi.ValidationError){
    //format error
    statusCode = 422;
    msg = "Validation Failed"
    data = {};
    const errorDetail = error.details
    if(Array.isArray(errorDetail)){
        errorDetail.map((errorObj)=>{
            data[errorObj.context.label] = errorObj.message
        })}
    }
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