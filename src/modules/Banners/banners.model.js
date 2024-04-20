// banners.model.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bannerSchema = new Schema({
  title: { type: String, required: true },
  link: { type: String },
  status: { type: String, enum: ['inactive', 'active'], default: 'inactive' },
  image: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  createdAt: { type: Date, default: Date.now },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  updatedAt: { type: Date, default: Date.now },
});

const BannerModel = mongoose.model('Banner', bannerSchema);

module.exports = BannerModel;
