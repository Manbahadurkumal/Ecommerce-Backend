// cartDetails.model.js

// const { required } = require('joi');
const mongoose = require('mongoose')
const OrderModel = require('./order.model')
const cartDetailSchema = new mongoose.Schema({
  orderId: { type: mongoose.Types.ObjectId, ref: 'Order', default: null },
  buyerId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  productId: { type: mongoose.Types.ObjectId, ref: 'Product', required: true },
  productDetail: {  title: String, slug: String, price: Number, afterDiscount: Number, discount: Number},
  quantity: { type: Number, required: true, min: 1 },
  // price: { type: Number, required: true },
  amount: { type: Number},
  sellerId: {
    type: mongoose.Types.ObjectId, ref: 'User', default: null
  },
  status: {
    type: String,
    enum: ['pending','ordered', 'cancelled', 'completed'],
    default: 'pending',
  },
  isPaid: { type: Boolean, default: false },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
},{
    timestamps: true,   //createdAt, updatedAt keys are auto added
    autoCreate: true,   //create the table
    autoIndex: true     //indexing
});

const CartDetailModel = mongoose.model('CartDetail', cartDetailSchema);

module.exports = CartDetailModel;

