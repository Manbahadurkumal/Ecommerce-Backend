// brands.model.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const brandSchema = new Schema({
  title: { type: String, unique: true },
  slug: { type: String, unique: true },
  status: { type: String, enum: ['inactive', 'active'], default: 'inactive' },
  image: { type: String },
  homeSection: { type: Boolean, default: false },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  updatedAt: { type: Date, default: Date.now },
});

const BrandModel = mongoose.model('Brand', brandSchema);

module.exports = BrandModel;
