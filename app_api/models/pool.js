var mongoose = require("mongoose");
var express =require('express');
var Schema = mongoose.Schema;
var validate = require("mongoose-validator");

var poolSchema = new Schema({
  subject : String,
  topic : String,
  location : String,
  splace : String,
  destination :String,
  stime: String,
  etime: String
});
var User = module.exports = mongoose.model("User", userSchema);
var app=express();
app.use(bodyParser.urlencoded({extended:true}));