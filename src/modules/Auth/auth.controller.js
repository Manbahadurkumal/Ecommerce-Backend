const joi = require("joi")
require('dotenv').config()

const mailSvc = require('../../services/mail.service')
const bcrypt = require('bcryptjs');
const { generateRandomString } = require("../../utilities/helpers");
class AuthController{   // class is for encapsulation only accessed through object
    register = async(req, res, next)=>{
        //email, name, password, role,
        //TODO: Validation
        //TODO: DB query to store
        //TODO: Verification Send via email
        //TODO: Client Response
        try{
        let payload = req.body;
        //name, email, password, role, image
        //stauts, activationToken
        payload.password = bcrypt.hashSync(payload.password, 10);
        //bcyrpt.compareSync(string, hash)
        
        payload.status = 'inactive'
        payload.activateToken = generateRandomString(100)

        if(req.file){
            payload.image = req.file.filename
        }

        //DB Store
        const registeredData = {
            ...payload,
            _id: 123
        }
        await mailSvc.sendEmail(
            registeredData.email,

            "Activate your account",
            `Dear ${registeredData.name}<br/>
            <p>You have registered your account with username <strong>${registeredData.email}</strong></p>
            <p>Please click the link below or copy and post the url in browser to activate your account</p>
            <a href="${process.env.FRONTEND_URL}/activate/${registeredData.activateToken}">
            ${process.env.FRONTEND_URL}/activate/${registeredData.activateToken}
            </a><br/>
            <p>Regards,</p>
            <p>${process.env.SMTP_FROM}</p>
            <p><small><em>Please do not reply to this email via any mail service</em></small></p>
            `
        )
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

    activate = (req, res, next)=>{
        try{
            const token = req.params.token
            //TODO:User identify
            //status ====>acitvate
            //activationToken ==>null
        }catch(exception){
            next(exception)
        }
    }
}

const authCtrl = new AuthController()
module.exports = authCtrl;