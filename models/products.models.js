var mongoose = require('mongoose');

var productsSchema = new mongoose.Schema(
  {
    title: 'string',
    description: 'string',
    image: 'string',
    price: 'string'
  },
  { 
    versionKey: false 
  }
);

var Products = mongoose.model('Products', productsSchema, 'products');

module.exports = Products;