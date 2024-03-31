const express = require('express')
const authRoute= express();
//Route import

authRoute.post('/auth/register', (req, res)=>{
    res.json({
        result: "Successfully called",
        message: "sucess call",
        meta: null,
    })
    // register logic
        //email user action token
})
authRoute.get('/auth/:token/activate', (req, res)=>{
    // register logic
        //email user action token
})

module.exports = authRoute