const brandSvc = require("./brand.service")

class BrandController{
    
    create = async (req, res, next) =>{
        try{
            const payload = brandSvc.transformCreateData(req);
            const createdBrand = await brandSvc.store(payload) //to store in data base
            res.json({
                result: createdBrand,
                message: "Brand Created Successfully",
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
                //?search=brand
                filter = {
                    title: new RegExp(req.query.search, 'i')

                }
            }

            const data = await brandSvc.listAll({
                limit: limit,
                skip: skip,
                filter: filter
            })
            const countData = await brandSvc.count({
                filter: filter
            })
            res.json({
                result: data,
                message: "Brand List",
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
            const detail = await brandSvc.findOne({
                _id: req.params.id
            })
            res.json({
                result: detail,
                message: "Brand Detail fetched",
                meta: null
            })

        }catch(exception){
            next (exception)
        }
    }

    update = async(req,res, next) =>{
        try{
            const existingData = await brandSvc.findOne({
                _id: req.params.id
            })
            const payload = brandSvc.transformUpdateData(req, existingData)
            const updateStatus = await brandSvc.update({_id: req.params.id}, payload)
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
            const exists = await brandSvc.findOne({_id: req.params.id})
            const status = await brandSvc.deleteOne({_id: req.params.id})
            res.json({
                result: status,
                message: "Brand deleted successfully",
                meta: null
            })

        }catch(exception){
            throw exception
        }
    }
    listForHome = async(req, res, next) =>{
        try{
            const list = await brandSvc.getForHome()
            res.json({
                result: list,
                message: "Brand listed successfully",
                meta: null
            })
        }catch(exception){
            next(exception)
        }
    }
}
const brandCtrl = new BrandController()
module.exports = brandCtrl