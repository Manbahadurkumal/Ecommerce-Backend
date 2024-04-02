const express = require('express')
const app = express();
const mainRoute = require("./routing.config")
const router = express.Router()
app.get('health', (req, res, next)=>{
    //res.end("hell0")
    res.json({
        result: "hello there",
        message: "sucess Ok",
        meta: null
    })
})
//routing mount
app.use(mainRoute)

// in use if i send url then it is response
// if i send call back then it is request
module.exports = app;