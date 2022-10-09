const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title : {
    type: String,
    require: true
  },
  desc : {
    type: String,
    require: true
  },
  imageUrl : {
    type: String,
    require: true
  },
  price: {
    type:Number,
    require: true
  },
   category: {
    type: String,
    require: true
  },
   quantity: {
    type: Number,
    require: true,
  },
    rate : {
      type: Number,
      default: 5
    }

},{timestamps: true});

module.exports = mongoose.model('Product',productSchema)
