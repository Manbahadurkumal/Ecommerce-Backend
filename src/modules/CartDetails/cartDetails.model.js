// cartDetails.model.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartDetailSchema = new Schema({
  orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
  buyerId: { type: Schema.Types.ObjectId, ref: 'User' },
  productId: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'cancelled', 'confirmed', 'completed'],
    default: 'pending',
  },
  isPaid: { type: Boolean, default: false },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  updatedAt: { type: Date, default: Date.now },
});

const CartDetailModel = mongoose.model('CartDetail', cartDetailSchema);

module.exports = CartDetailModel;

