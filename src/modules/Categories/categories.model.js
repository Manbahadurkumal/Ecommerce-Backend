// categories.model.js

const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  title: { 
    type: String, 
    unique: true 
    },
  slug: { 
    type: String, 
    unique: true 
    },
  parentId: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Category', 
    default: null 
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
},{
    timestamps: true,   //createdAt, updatedAt keys are auto added
    autoCreate: true,   //create the table
    autoIndex: true     //indexing
});

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
