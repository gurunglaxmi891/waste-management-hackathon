const { name } = require('ejs');
const mongoose = require('mongoose');




const userSchema = mongoose.Schema({
  name : String,
  password: String,
  createdAt : { type : Date, default : Date.now }
});

module.exports = mongoose.model('profile', userSchema);
