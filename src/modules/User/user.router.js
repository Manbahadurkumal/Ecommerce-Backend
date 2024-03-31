const express = require('express');
const authRoute = require('../Auth/auth.router');
const userRoute = express();
authRoute.post('/')