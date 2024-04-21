require("dotenv").config()
const jwt = require('jsonwebtoken')
const authSvc = require("../modules/Auth/auth.service")
const auth = async (req, res, next) =>{
    try{
        let token = req.headers['authorization'] || null;
        if(!token){
            next({code: 401, message: "Token/Access Code required"})
        }
        // Bearer token ==> ["bearer", "token"].pop()
        token = token.split(" ").pop()

        //token verity
        //signature, expiry, formatting

        const tokenData = jwt.verify(token, process.env.JWT_SECRET )
        const userDetail = await authSvc.findOneUser({
            _id: tokenData.sub
        })
        console.log(userDetail)
        if(!userDetail){
            next({code: 401, message: "User does not exists anymore"})
        }
        req.authUser = userDetail;
        next()  //allow the access
    }catch(exception){
        console.log("Exception", exception)
        next({code: 401, message: "Unauthorized access"})
    }
}
module.exports = auth



// RBAC-->Role based 
