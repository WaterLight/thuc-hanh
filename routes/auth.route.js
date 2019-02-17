
var express = require('express')
var Router = express.Router()

var authController = require('../controllers/auth.controller');

Router.get('/login', authController.login);

Router.post('/login', authController.postLogin);

module.exports = Router;