
var Products = require('../models/products.models')

module.exports.index = async (req, res) => {
  var products = await Products.find();
  res.render('products/index', {
    products: products
  });
}