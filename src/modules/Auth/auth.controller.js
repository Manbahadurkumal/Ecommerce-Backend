class AuthController{   // class is for encapsulation only accessed through object
    register = (req, res, next)=>{
        //TODO: Validation
        //TODO: DB query to store
        //TODO: Verification Send via email
        //TODO: Client Response
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