const mongoose = require('mongoose');


const MessageSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  request: String
});

module.exports = mongoose.model('Message', MessageSchema);

