var Users = require('../models/users.models')

module.exports.login = (req, res) => {
  res.render('auth/login');
}

module.exports.postLogin = async (req, res) => {
  const gmail = req.body.gmail;
  const pass = req.body.pass;

  var user = await Users.findOne({gmail: gmail});

  if( !user ) {
    res.render('auth/login', {
      errors: [
        "Gmail is required"
      ],
      values: req.body
    });
    return;
  }

  if(pass != user.password) {
    res.render('auth/login', {
      errors: [
        "Wrong is pass"
      ],
      values: req.body
    });
    return;
  }

  res.cookie('userId', user.id, {
    signed: true
  });
  res.redirect('/users');

}