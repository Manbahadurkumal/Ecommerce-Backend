const express = require('express');
// const authRoute = require('../Auth/auth.router');
const userRoute = express();
userRoute.post('/user', (req, res)=>{
    res.json({
        result: "any",
        message: "sucess call",
        meta: null,
    })
    // register logic
        //email user action token
})
userRoute.get('/auth/:token/activate', (req, res)=>{
    // register logic
        //email user action token
})
module.exports = userRoute