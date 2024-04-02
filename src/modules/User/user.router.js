const userRoute = require('express').Router();

// const express = require('express');
// const authRoute = require('../Auth/auth.router');
// const userRoute = express.Router();
userRoute.route('/')
    .post( (req, res,next)=>{
        // create
        })
    .get((req, res,next)=>{
        // list all
        })
// userRoute.post('/', (req, res,next)=>{
//    // create
// })
// userRoute.get('/', (req, res, next)=>{
//     //list all
// })

userRoute.route('/:id')
    .get((req, res, next)=>{
        //view detail
    })
    .patch((req, res, next)=>{
        //update
    })
    .delete((req, res, next)=>{
        //delete
    })
// userRoute.get('/:id', (req, res, next)=>{
//     //view detail
// })
// userRoute.patch('/:id', (req, res, next)=>{
//     //update
// })
// userRoute.delete('/:id', (req, res, next)=>{
//     //view deatail
// })

//CRUD 
    // /user/:id/history-order
    // /user/:id/messages
module.exports = userRoute