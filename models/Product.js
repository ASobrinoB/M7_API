const mongoose = require('mongoose')

const productSchema = mongoose.Schema
({description:   {type: String, required: true},
  specification: {type: String, required: false},
  priceUSD:      {type: Number, required: true},
  shippingUSD:   {type: Number, required: true},
  weightKG:      {type: Number, required: true},
  stock:         {type: Number, required: false},
  image:         {type: String, required: false}},
 {timestamps: true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product