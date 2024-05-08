const CartDetailModel = require("./cart-detail.model");
const OrderModel = require("./order.model")
class CartDetailService {
    transformCartObject = (product, quantity, user) =>{

        let currentCartproduct = {
            buyerId: user._id,
            productId: product._id ,
            orderId:  null,
            productDetail: {
                title: product.title,
                slug:product.slug,
                price:product.price,
                afterDiscount:product.afterDiscount,
                discount:product.discount,
            },
            quantity: quantity,
            amount: (product.afterDiscount * quantity),
            sellerId: product?.sellerId,
            status:"pending",
            isPaid: false,
            createdBy: user._id,
            updatedBy: user._id
        }
        return currentCartproduct;
    
    }
    findOne = async (filter) =>{
        try{
            const result = await CartDetailModel.findOne(filter);
            return result

        }catch(exception){
            throw exception
        }
    }
    removeFromCartById = async (id) =>{
        try{
            const remove = await CartDetailModel.findByIdAndDelete(id);
            if(remove){
                return remove
            }
            else{
                throw {code: 404, message: "Data does not exists"}
            }

        }catch(exception){
            throw exception;
        }
    }
    createCart = async (data) =>{
        try{
            const cart = new CartDetailModel(data);
            return await cart.save()

        }catch(exception){
            throw exception
        }
    }
    findAll = async(filter) =>{
        try{
            const detail = await CartDetailModel.find(filter)
                .populate('orderId')
                .populate('buyerId', ['_id', 'name', 'email','role'])
                .populate("productId")
            return detail
        }catch(exception) {
            throw exception;
        }
    }
    placeOrder = async (data, cartId) =>{
        try{
            const order = new OrderModel(data);
            await order.save()
            // order created

            await CartDetailModel.updateMany({
                _id: {$in: [...cartId]}
            },{
                $set: {
                    orderId: order._id,
                    status: "ordered"
                }
            })
            return order;

        }catch(exception){
            throw exception
        }
    }
    getOrderList = async (filter) => {
        try{
            const orderList = await OrderModel.find(filter)
                .populate("buyerId", ["_id", "name", "email", "phone", "address"])
                .populate("cartDetail")
                .sort({"createdAt": "desc"})
            return orderList
        }catch(exception){
            throw exception
        }
    }
    updateCartDetail = async(filter, updateBody) => {
        try{
            const status = await CartDetailModel.updateOne(filter, {
                $set: updateBody
            })
            return status;
        }catch(exception){
            throw exception
        }
    }
    updateOrderDetail = async(filter, updateBody) => {
        try{
            const status = await OrderModel.updateOne(filter, {
                $set: updateBody
            })
            await this.updateCartDetail({
                orderId: filter._id,
                status: "ordered"
            }, {
                status: "completed"
            })
            return status;
        }catch(exception){
            throw exception
        }
    }
}

const cartDetailSvc = new CartDetailService()
module.exports = cartDetailSvc