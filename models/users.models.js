var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
    name: 'string',
    phone: 'string',
    gmail: 'string',
    password: 'string'
  },
  { 
    versionKey: false 
  }
);

var Users = mongoose.model('Users', userSchema, 'users');

module.exports = Users;
