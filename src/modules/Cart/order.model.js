// orders.model.js

const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
  buyerId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  // orderDate: { type: Date, default: Date.now },
  cartDetail: [{ type: mongoose.Types.ObjectId, ref: 'CartDetail', required: true }],
  subTotal: { type: Number },
  discountAmt: { type: Number, min: 0, default: 0 },
  discountPer: { type: Number, min: 0, default: 0 },

  // tax: { type: Number },
  deliveryCharge: { type: Number, min: 100, default: 100 },
  totalAmount: { type: Number, min: 0, default: 0 },
  isPaid: { type: Boolean, default: false },
  paymentMethod: {
    type: String,
    enum: ["cod", "online", "phonepay", "bank"],
    default: "cod"
  },
  status: {
    type: String,
    enum: ['pending', 'cancelled', 'confirmed', 'delivered'],
    default: 'pending',
  },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
},{
  timestamps: true,
  autoIndex: true,
  autoCreate: true
});

const OrderModel = mongoose.model('Order', orderSchema);

module.exports = OrderModel;
