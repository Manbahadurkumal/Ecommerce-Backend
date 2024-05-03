const productSvc = require("../Products/product.service")

class CartDetailController{
    addToCart = async (req, res, next) => {
        try{
            const {productId, quantity} = req.body;
            const productDetail = await productSvc.findOne({
                _id: productDetail
            })
            let currentCartproduct = {
                buyerId: req.authUser._id,

                productId: productId ,
                orderId:  null,
                productDetail: {
                    title: productDetail.title,
                    slug:productDetail.slug,
                    price:productDetail.price,
                    afterDiscount:productDetail.afterDiscount,
                    discount:productDetail.discount,
                },
                quantity: quantity,
                amount: (productDetail.afterDiscount * quantity),
                sellerId: productDetail?.sellerId,
                status:"pending",
                isPaid: false,
                createdBy: req.authUser._id,
                updatedBy: req.authUser._id
            }

        }catch(exception){
            next(exception)
        }
    }
}
const cartDetailCtrl = new CartDetailController()
module.exports = cartDetailCtrl