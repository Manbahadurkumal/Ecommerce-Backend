const productSvc = require("./product.service")

class ProductController{
    
    create = async (req, res, next) =>{
        try{
            const payload = await productSvc.transformCreateData(req);
            const createdProduct = await productSvc.store(payload) //to store in data base
            res.json({
                result: createdProduct,
                message: "Product Created Successfully",
                meta: null
            })

        }catch(exception){
            next(exception)
        }
    }

    index = async(req, res, next) =>{
        try{
            //optimization of solutin ==> pagination
            const page = +req.query.page || 1;
            const limit = +req.query.limit || 15;
            const skip = (page - 1) * limit;

            let filter = {};
            //search
            if(req.query.search){
                //?search=product
                filter = {
                    title: new RegExp(req.query.search, 'i')

                }
            }

            const data = await productSvc.listAll({
                limit: limit,
                skip: skip,
                filter: filter
            })
            const countData = await productSvc.count({
                filter: filter
            })
            res.json({
                result: data,
                message: "Product List",
                meta: {
                    limit: limit,
                    page: page,
                    total: countData
                }
            })
        }catch(exception){
            next(exception)
        }
    }
    
    show = async(req, res, next) =>{
        try{
            const detail = await productSvc.findOne({
                _id: req.params.id
            })
            res.json({
                result: detail,
                message: "Product Detail fetched",
                meta: null
            })

        }catch(exception){
            next (exception)
        }
    }

    update = async(req,res, next) =>{
        try{
            const existingData = await productSvc.findOne({
                _id: req.params.id
            })
            const payload = productSvc.transformUpdateData(req, existingData)
            const updateStatus = await productSvc.update({_id: req.params.id}, payload)
            res.json({
                result: updateStatus,
                message: "Data updated",
                meta: null
            })
        }catch(exception){
            next(exception)
        }
    }
    delete = async (req, res, next) =>{
        try{
            const exists = await productSvc.findOne({_id: req.params.id})
            const status = await productSvc.deleteOne({_id: req.params.id})
            res.json({
                result: status,
                message: "Product deleted successfully",
                meta: null
            })

        }catch(exception){
            throw exception
        }
    }
    listForHome = async(req, res, next) =>{
        try{
            const list = await productSvc.getForHome()
            res.json({
                result: list,
                message: "Product listed successfully",
                meta: null
            })
        }catch(exception){
            next(exception)
        }
    }
}
const productCtrl = new ProductController()
module.exports = productCtrl