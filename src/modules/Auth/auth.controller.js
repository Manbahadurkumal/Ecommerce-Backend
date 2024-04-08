const joi = require("joi")
class AuthController{   // class is for encapsulation only accessed through object
    register = async(req, res, next)=>{
        //email, name, password, role,
        //TODO: Validation
        //TODO: DB query to store
        //TODO: Verification Send via email
        //TODO: Client Response
        try{
        const payload = req.body;
        // const Response = await rule.validateAsync(payload, {abortEarly: false})
        // console.log(Response)
        res.json({
            result: payload,  
            message: "Register sucess",
            meta: null
        })
        }catch(exception){
            console.log(exception)
            next(exception)
        }
        
    }
    login = (req, res, next)=>{
        //TODO: DATA Validate
        //TODO: Db query execute
        // TODO: OTP create
        //TODO: Client Response
    }
}

const authCtrl = new AuthController()
module.exports = authCtrl;