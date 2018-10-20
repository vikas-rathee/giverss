var mongoose = require("mongoose");
var express =require('express');
var Schema = mongoose.Schema;
var validate = require("mongoose-validator");

var tutorSchema = new Schema({
  subject : String,
  topic : String,
  location : String,
  sday : Date,
  eday :Date,
  stime: String,
  etime: String
});
var User = module.exports = mongoose.model("User", userSchema);
var app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/create',function(req,res){
	var subject=req.body.subject;
	var  topic=req.body.topic;
	var  location=req.body.location;
	var  sday=req.body.sday;
	var  eday=req.body.eday;
	var  stime=req.body.stime;
	var  etime=req.body.etime;
    var newuser=new User({subject:subject,topic:topic,location:location,sday:sday,eday:eday,stime:stime,etime:etime});

	newuser.save(function(err,testEvent){
	console.log(" is created successfully!");
})
});
