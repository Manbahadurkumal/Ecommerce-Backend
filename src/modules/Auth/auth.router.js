
const authRoute= require('express').Router();
const authCtrl = require("./auth.controller");
const {bodyValidator} = require ('../../middleware/validator.middleware')
const {registerDTO, loginDTO} = require("./auth.dto")
const {setPath, uploader} = require("../../middleware/uploader.middleware")


authRoute.post('/register',setPath('users'), uploader.single('image'), bodyValidator(registerDTO), authCtrl.register)
authRoute.get("/activate/:token", authCtrl.activate)
authRoute.post('/login', bodyValidator(loginDTO), authCtrl.login)
authRoute.get('/me', authCtrl.getLoggedIn)
// // expressapp ====> Mount ===>Middleware
// // request manipulate
// // 
// authRoute.post('/register', (req, res, next)=>{
//     //data receive client
        
//         //db store
//             //response register
//     const data = 
//     {
//         name: "Manish",
//         email: "mk9307888@gmail.com",
//         role: "admin",
//         password: "admin123"
//     };
//     if(!data){
//         //error response
//         next({code: 422, data:{name: "Name is required", email: "Email is required", password: "Password required", role: "Role is required"}})
//     }else{
//         //validate
//         if(!data.name){
//             next({code: 422,message:"Validation Failed", data:{name: "Name is required"}})
//             // res.status(422).json({
//             //     result:{
//             //         name: "Name is required",

//             //     },
//             //     message: "validation Failed",
//             //     meta: null
//             // })
//         }
//         if(!data.email){
//             next({code: 422,message:"Validation Failed", data:{email: "email is required"}})
            
//             // res.status(422).json({
//             //     result:{
//             //         email: "Email is required",
//             //     },
//             //     message: "validation Failed",
//             //     meta: null
//             // })
            
//         }
//         if(!data.password){
//             next({code: 422,message:"Validation Failed", data:{password: "Password is required"}})
//             // res.status(422).json({
//             //     result:{
//             //         password: "password is required",
//             //     },
//             //     message: "validation Failed",
//             //     meta: null
//             // })
//         }
//         if(!data.role){
//             next({code: 422,message:"Validation Failed", data:{role: "role is required"}})

//             // res.status(422).json({
//             //     result:{
//             //     role: "Role is required",
//             //     },
//             //     message: "validation Failed",
//             //     meta: null
//             // })
//         };
//     }
//         const registeredUser = {
//             _id: "123abc",
//             name: "Manish",
//             email: "mk9307888@gmail.com",
//             password: "admin123",
//             role: "admin"
//         };
//         if(registeredUser){
//             //sucess
//             res.json({
//                 result: registeredUser,
//                 message: "sucess",
//                 meta: null
//             })
//         }else{
//             next({code: 400, message: "Sorry! Cannot create a user"})
//             // res.status(400).json({
//             //     result: null,
//             //     message: "User cannot register",
//             //     meta: null
//             // })
//         }
    
    
    
// })
// authRoute.get('/:token/activate', (req, res)=>{
//     // register logic
//         //email user action token
// })


// //Testing router
// //admin view , access
// //login check,
// // Login =>role =>admin ==> pass
// const loginCheck = (req, res, next)=>{
//     //any mount
//     //login check
//         //loggein in ===>next action
//     //false ==>return client res staging login
//     let success = true;
//     let userDetail = {
//         _id: 123,
//         name: "manish",
//         role: "admin"
//     }
//     if(success){
//         req.authUser = userDetail
//         next()
//     }else{
//         res.status(401).json({
//             result : null,
//             message: "Please login first",
//             meta: null
//         })
//     }
// }
// const permissionCheck = (req, res, next) =>{
//     //can be only after login
//     const authUser = req.authUser || null;
//     if(!authUser){
//         res.status(401).json({
//             result: null,
//             message: "Please login first",
//             meta: null
//         })
//     }else{
//         if(authUser.role ==='admin'){
//             next()
//         }else{
//             res.status(403).json({
//                 result: null,
//                 message: "hello",
//                 meta: null
//             })

//         }
//     }
// }
// const adminAccessAction = (req, res, next)=>{
//     //admin access
//     res.json({
//         result: null,
//         message: "login success",
//         meta: null
//     })
// }
// authRoute.get("/admin",loginCheck, permissionCheck, adminAccessAction );
// authRoute.get("/:userId", loginCheck, permissionCheck, (req, res, next)=>{

// })
// authRoute.get("/me", loginCheck, (req, res, next)=>{
//     //user det
//     res.json({
//         result: req.authUser,
//         message: "Profile fetched",
//         meta: null
//     })
// })

module.exports = authRoute