
require('dotenv').config()
const mailSvc = require('../../services/mail.service')
const authSvc = require('./auth.service')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//token verification

class AuthController{   
    register = async(req, res, next)=>{
        try{
            const data = authSvc.transformRegisterData(req);
            const registeredData = await authSvc.createUser(data);
        
        await mailSvc.sendEmail(
            registeredData.email,

            "Activate your account",
            `Dear ${registeredData.name}<br/>
            <p>You have registered your account with username <strong>${registeredData.email}</strong></p>
            <p>Please click the link below or copy and post the url in browser to activate your account</p>
            <a href="${process.env.FRONTEND_URL}/activate/${registeredData.activationToken}">
            ${process.env.FRONTEND_URL}/activate/${registeredData.activationToken}
            </a><br/>
            <p>Regards,</p>
            <p>${process.env.SMTP_FROM}</p>
            <p><small><em>Please do not reply to this email via any mail service</em></small></p>
            `
        );

        // const Response = await rule.validateAsync(payload, {abortEarly: false})
        // console.log(Response)
        res.json({
            result: registeredData,  
            message: "Register sucess",
            meta: null
        })}catch(exception){
            console.log(exception)
            next(exception)
        }
        
    }
    login = async(req, res, next)=>{
        try{
            const { email, password} = req.body;
            const userDetail = await authSvc.findOneUser({
                email: email
            })
            //if user does not exists
            if(!userDetail){
                throw {code: 400, message: "User doesnot exist"}
            }
            //user do exists
            if(bcrypt.compareSync(password, userDetail.password)){
                //password match
                if(userDetail.status !== 'active'){
                    //user is not activated
                    throw {code: 400, message: "your account has not been activated. Please activate or contact administration."}
                }

                //user is active
                const accessToken = jwt.sign({
                    sub: userDetail._id
                },process.env.JWT_SECRET)
                const refreshToken = jwt.sign({
                    sub: userDetail._id
                },process.env.JWT_SECRET, {
                    expiresIn: "1d"
                })
                res.json({
                    result: {
                        detail: {
                            _id: userDetail._id,
                            name: userDetail.name,
                            email: userDetail.email,
                            role: userDetail.role,
                            status: userDetail.status,
                            image: userDetail.image
                        },
                        token:{
                            accessToken: accessToken,
                            refreshToken: refreshToken
                        }
                    },
                    message: "Login Successful",
                    meta: null
                })
            }else{
                //password does not match
                throw {code: 400, message: "Credentials does not match"}
            }

        }catch(exception){
            next(exception)
        }
    }

    activate = async (req, res, next)=>{
        try{
            const token = req.params.token
            const associatedUser = await authSvc.findOneUser({
                activationToken: token
            })
            if(!associatedUser){
                throw{code: 400, message: "Token does not exists"}
            }
            const updateResult = await authSvc.updateUser({
                activationToken: null,
                status: "active"
            }, associatedUser._id)
            res.json({
                result: updateResult,
                message: "your account has been activated successfully",
                meta: null
            })
        }catch(exception){
            next(exception)
        }
    }
    logout = (req, res, next) =>{
        try{
            loggedInUser = null
            res.status(200).json({ message: "Logged out successfully." });
        }catch(exception){
            res.status(500).json({ message: "Error logging out." });
        }
    }
    getLoggedIn = async(req, res, next)=>{
        //verify the user login or not
        try{
            const loggedInUser = req.authUser;
            const response = {
                _id: loggedInUser._id,
        name: loggedInUser.name,
        email: loggedInUser.email,
        role: loggedInUser.role,
        
        status: loggedInUser.status,
        image: loggedInUser?.image,
        
        __v: 0
            }
            res.json({
                result: response,
                message: "Your profile",
                meta: null
            })
        }catch(exception){
            next(exception)
        }

    }
    adminAccess = async (req, res, next) =>{
        try{
            res.json({
                result: "I am only accessed by admin",
                message: "Admin only",
                meta: null
            })
        }catch(exception){
            next(exception)
        }
    }

}


const authCtrl = new AuthController()
module.exports = authCtrl;