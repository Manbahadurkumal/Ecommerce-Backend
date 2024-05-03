const userSvc = require("./user.service")
class UserController {
    index = async (req, res, next) => {
        try {

            //optimization of solutin ==> pagination
            const page = +req.query.page || 1;
            const limit = +req.query.limit || 15;
            const skip = (page - 1) * limit;

            let filter = {};
            //search
            if (req.query.search) {
                //?search=user
                filter = {
                    name: new RegExp(req.query.search, 'i'),
                    email: new RegExp(req.query.search, 'i')
                }
            }
            if (req.query.role) {
                //?search=user
                filter = {
                    ...filter,
                    role: req.query.role
                }
            }

            const data = await userSvc.listAll({
                limit: limit,
                skip: skip,
                filter: filter
            })
            const countData = await userSvc.count({
                filter: filter
            })
            res.json({
                result: data,
                message: "User List",
                meta: {
                    limit: limit,
                    page: page,
                    total: countData
                }
            })

        } catch (exception) {
            next(exception)
        }
    }
}

const userCtrl = new UserController()
module.exports = userCtrl