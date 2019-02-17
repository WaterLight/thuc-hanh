require('dotenv').config();

var Sessions = require('../models/sessions.model');

module.exports.session = async (req, res, next) => {
  if(!req.signedCookies.sessionId) {
    res.cookie('sessionId', process.env.STRING_SESSION, {
      signed: true
    });
  }

  var session = await Sessions.findOne({sessionId: req.signedCookies.sessionId});

  if(!session) {    
    var myData = new Sessions(req.signedCookies); // assume your model name is Socket
    myData.save();
  };  

  next();
}