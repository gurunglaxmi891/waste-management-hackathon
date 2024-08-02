var express = require('express');
var router = express.Router();
var profile = require('../resources/profile');
const mongoose = require("mongoose");
const socketIo = require('socket.io');
//connecting mongoose
mongoose.connect('mongodb://127.0.0.1:27017/adminData')
.then(() => console.log("MongoDb connected"))
.catch(err => console.log('Mongo Err', err));


//schema
const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    required:true,
  },
  Password: {
    type: String,
    required: true,
     
  }
})
const User = mongoose.model("user" , userSchema)


// add a new route for schedule page
router.get("/schedule",(req,res) =>{
    res.render("schedule");
  });
  router.get("/dashboard",(req,res) =>{
    res.render("dashboard");
  });
  

router.get("/profile",(req,res) =>{
  res.render("profile",{admin: profile});

  });


module.exports = router;