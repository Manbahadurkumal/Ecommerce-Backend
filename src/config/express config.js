const express = require('express')
const app = express();
const mainRoute = require("./routing.config")

app.use(mainRoute)



// in use if i send url then it is response
// if i send call back then it is request
module.exports = app;