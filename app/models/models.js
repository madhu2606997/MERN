const mongoose = require('mongoose');


const UsersSchema = new mongoose.Schema({
  username: String,
  password: String,
  roleid : Number

});

module.exports =   {  UsersSchema }