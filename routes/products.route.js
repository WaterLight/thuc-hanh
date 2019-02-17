
var express = require('express')
var Router = express.Router()

var productsController = require('../controllers/products.controller');

Router.get('/', productsController.index);

module.exports = Router;