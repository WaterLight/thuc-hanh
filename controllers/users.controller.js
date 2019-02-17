
var Users = require('../models/users.models');

module.exports.index = async (req, res) => {
  var users = await Users.find();
  res.render('users/index', {
    users: users
  });    
}

module.exports.search = async (req, res) => {
  let {q} = req.query;
  var mathedUsers = await Users.find({name: new RegExp(q, 'i')});
  res.render('users/index', {
    users: mathedUsers,
    q: q
  });
}

module.exports.getCreate = (req, res) => {
  res.render('users/create');
}

module.exports.postCreate = (req, res) => {
  var myData = new Users(req.body); // assume your model name is Socket
  myData.save();
  res.redirect('/users');
}

module.exports.view = async (req, res) => {
  let {id} = req.params;

  var user = await Users.findById(id);

  res.render('users/view', {
    user: user
  });
}