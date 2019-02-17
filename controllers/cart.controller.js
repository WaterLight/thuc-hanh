
var Sessions = require('../models/sessions.model');

module.exports.cart = async (req, res) => {
  var {id} = req.params;
  var sessionId = req.signedCookies.sessionId;
  var cart = { id: id };
  var session = await Sessions.findOne({sessionId: sessionId});

  // var cartId = await Sessions.findOne({ "carts.id": id });
  // var count = await cartId.carts[0];
  // console.log(count);

  // if(!cartId) {    
    session.carts.push(cart);
    session.save();
    res.redirect('/products');
    return;
  // }; 

  
  res.redirect('/products');

}