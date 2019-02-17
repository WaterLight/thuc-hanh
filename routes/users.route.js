var express = require('express')

var router = express.Router()
var usersController = require('../controllers/users.controller')

router.get('/', usersController.index)

router.get('/search', usersController.search)

router.get('/create', usersController.getCreate)

router.post('/create', usersController.postCreate)

router.get('/:id', usersController.view)
  
module.exports = router;