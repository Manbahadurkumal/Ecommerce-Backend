// product.model.js

const mongoose = require('mongoose');

// const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  title: { 
    type: String, 
    unique: true 
    },
  slug: {
    type: String, 
    unique: true 
    },
  summary: String,
  description: String ,
  categories: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Category', 
    default: null
    },
  price: Number,
  discount: Number,
  afterDiscount: Number,
  brand: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Brand' 
    },
  stock: Number,
  sku: String,
  featured: { 
    type: Boolean, 
    default: false 
    },
  seller: { 
    type: mongoose.Types.ObjectId, 
    ref: 'User' 
    },
  status: { 
    type: String, 
    enum: ['inactive', 'active'], 
    default: 'inactive' 
    },
  image: { type: String },
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
    },
    {
    timestamps: true,   //createdAt, updatedAt keys are auto added
    autoCreate: true,   //create the table
    autoIndex: true     //indexing
});

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;
