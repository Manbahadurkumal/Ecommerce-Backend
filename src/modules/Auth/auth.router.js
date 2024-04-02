const express = require('express')
const authRoute= express.Router();

// expressapp ====> Mount ===>Middleware
// request manipulate
// 
authRoute.post('/register', (req, res)=>{
    res.json({
        result: "Successfully called",
        message: "sucess call",
        meta: null,
    })
    // register logic
        //email user action token
})
authRoute.get('/:token/activate', (req, res)=>{
    // register logic
        //email user action token
})


//Testing router
//admin view , access
//login check,
// Login =>role =>admin ==> pass
const loginCheck = (req, res, next)=>{
    //any mount
    //login check
        //loggein in ===>next action
    //false ==>return client res staging login
    let success = true;
    let userDetail = {
        _id: 123,
        name: "manish",
        role: "seller"
    }
    if(success){
        req.authUser = userDetail
        next()
    }else{
        res.status(401).json({
            result : null,
            message: "Please login first",
            meta: null
        })
    }
}
const permissionCheck = (req, res, next) =>{
    //can be only after login
    const authUser = req.authUser || null;
    if(!authUser){
        res.status(401).json({
            result: null,
            message: "Please login first",
            meta: null
        })
    }else{
        if(authUser.role ==='admin'){
            next()
        }else{
            res.status(403).json({
                result: null,
                message: "hello",
                meta: null
            })

        }
    }
}
const adminAccessAction = (req, res, next)=>{
    //admin access
    res.json({
        result: null,
        message: "login success",
        meta: null
    })
}
authRoute.get("/admin",loginCheck, permissionCheck, adminAccessAction );
authRoute.get("/:userId", loginCheck, permissionCheck, (req, res, next)=>{

})
authRoute.get("/me", loginCheck, (req, res, next)=>{
    //user det
    res.json({
        result: req.authUser,
        message: "Profile fetched",
        meta: null
    })
})

module.exports = authRoute