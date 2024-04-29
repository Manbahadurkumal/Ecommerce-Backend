const bodyValidator = (schema) =>{
    return async (req, res, next)=>{
        try{
            const data = req.body;

            if(fileUploadField){
                fileUploadField.map((uploadField) =>{
                    if(!data[uploadField]){
                        data[uploadField]
                    }
                })
            }
            await schema.validateAsync(data, {abortEarly: false})
            next()
        }catch(exception){
            next(exception)
        }
    }
}
module.exports = {bodyValidator}