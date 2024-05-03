// banner.model.js

const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  title: { type: String, required: true, min:3 },
  link: { type: String },
  status: { type: String, enum: ['inactive', 'active'], default: 'inactive' },
  image: { type: String, required: true },
  createdBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
  updatedBy: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
},{
  timestamps: true,
  autoCreate: true,
  autoIndex: true

});

const BannerModel = mongoose.model('Banner', bannerSchema);

module.exports = BannerModel;
