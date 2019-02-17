var express = require('express')

var router = express.Router()
var tutsController = require('../controllers/tuts.controller')

router.get('/', tutsController.index)
  
module.exports = router;