var mongoose = require('mongoose');

var sessionsSchema = new mongoose.Schema(
  {
    sessionId: String,
    carts: [{id: String}]
  },
  { 
    versionKey: false 
  }
);

var Sessions = mongoose.model('Sessions', sessionsSchema, 'sessions');

module.exports = Sessions;