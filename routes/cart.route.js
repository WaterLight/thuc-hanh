var express = require('express')
var Router = express.Router()

var cartController = require('../controllers/cart.controller');

Router.get('/:id', cartController.cart);

module.exports = Router;