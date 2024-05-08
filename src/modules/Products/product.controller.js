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
            const loggedInUser = req.authUser;

            //search
            if(req.query.search){
                //?search=product
                filter = {
                    title: new RegExp(req.query.search, 'i')

                }
            }
            //seller filter
            if(loggedInUser.role === 'seller'){
                filter = {
                    ...filter,
                    sellerId: loggedInUser._id
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
            const loggedInUser = req.authUser;
            let filter = {
                _id: req.params.id,
            }
            if (loggedInUser.role === 'seller'){
                filter = {
                    ...filter,
                    sellerId: loggedInUser._id
                }
            }
            const detail = await productSvc.findOne(filter)
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
            const loggedInUser = req.authUser;
            let filter = {
                _id: req.params.id,
            }
            if (loggedInUser.role === 'seller'){
                filter = {
                    ...filter,
                    sellerId: loggedInUser._id
                }
            }
            const existingData = await productSvc.findOne(filter)
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
            const loggedInUser = req.authUser;
            let filter = {
                _id: req.params.id,
            }
            if (loggedInUser.role === 'seller'){
                filter = {
                    ...filter,
                    sellerId: loggedInUser._id
                }
            }
            await productSvc.findOne(filter)
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
    getProductDetailBySlug = async(req, res, next) =>{
        try{
            const slug = req.params.slug;
            const filter = {
                slug: slug,
                status: "active"
            }
            const productDetail = await productSvc.findOne(filter);
            const relatedFilter = {
                categories: {$in: productDetail.categories},
                _id: {$ne: productDetail._id}
            }
            const relatedProducts = await productSvc.listAll({limit: 10, skip: 0, filter:relatedFilter})


            res.json({
                result: {
                    detail: productDetail,
                    relatedProduct: relatedProducts
                },
                message: "Product List",
                meta: null
            })

        }catch(exception){
            next(exception)
        }
    }
}
const productCtrl = new ProductController()
module.exports = productCtrl