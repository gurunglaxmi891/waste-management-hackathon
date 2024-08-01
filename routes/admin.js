var express = require('express');
var router = express.Router();

// add a new route for schedule page

router.get("/schedule",(req,res) =>{
    res.render("schedule");
  });

router.get("/profile",(req,res) =>{
  res.render("profile");
  });

module.exports = router;