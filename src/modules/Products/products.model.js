// product.model.js

const mongoose = require('mongoose');

// const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    min: 2
    },
  slug: {
    type: String, 
    unique: true 
    },
  summary: {
    type: String,
    required: true
  },
  description: String ,
  price: {
    type: Number,
    min: 100,
    required: true
  },
  discount: {
    type: Number,
    min: 0,
    max: 90,
    default: 0
  },
  afterDiscount: {
    type: Number,
    min: 0,
    required: true
  },
  // categoryId: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "Product",
  //   defalut: null
  // },
  // stock: Number,
  // sku: String,
  sellerId: { 
    type: mongoose.Types.ObjectId, 
    ref: 'User',
    default: null 
    },
  brand: {
    type: mongoose.Types.ObjectId,
    ref: "Brand",
    default: null
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  categories: [{ 
    type: mongoose.Types.ObjectId, 
    ref: 'Category', 
    default: null
    }],
  status: { 
    type: String, 
    enum: ['inactive', 'active'], 
    default: 'inactive' 
    },
  images: [{
    type: String,
   }],
  createdBy: { 
    type: mongoose.Types.ObjectId, 
    ref: 'User', 
    default: null 
    }, 
  updatedBy: { 
    type: mongoose.Types.ObjectId, 
    ref: 'User', 
    default: null 
  }, 
}, {
    timestamps: true,   //createdAt, updatedAt keys are auto added
    autoCreate: true,   //create the table
    autoIndex: true     //indexing
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
