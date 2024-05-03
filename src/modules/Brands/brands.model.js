// brands.model.js

const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  title: { type: String, unique: true, min:2, unique: true },
  slug: { type: String, unique: true },
  status: { type: String, enum: ['inactive', 'active'], default: 'inactive' },
  image: { type: String, reqired: true },
  homeSection: { type: Boolean, default: false },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null }, 
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
  
},
{
  timestamps: true,
  autoCreate: true,
  autoIndex: true

});

const BrandModel = mongoose.model('Brand', brandSchema);

module.exports = BrandModel;
