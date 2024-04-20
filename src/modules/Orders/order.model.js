// orders.model.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  buyerId: { type: Schema.Types.ObjectId, ref: 'User' },
  orderDate: { type: Date, default: Date.now },
  orderDetail: { type: Schema.Types.ObjectId, ref: 'CartDetail' },
  subTotal: { type: Number },
  discount: { type: Number },
  deliveryAmount: { type: Number },
  tax: { type: Number },
  serviceCharge: { type: Number },
  totalAmount: { type: Number },
  isPaid: { type: Boolean, default: false },
  status: {
    type: String,
    enum: ['pending', 'processing', 'cancelled', 'confirmed', 'delivered'],
    default: 'pending',
  },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  updatedAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
