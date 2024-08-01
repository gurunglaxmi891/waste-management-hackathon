var express = require('express');
var router = express.Router();
var profile = require('../resources/profile');

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