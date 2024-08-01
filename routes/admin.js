var express = require('express');
var router = express.Router();

// add a new route for schedule page

router.get("/schedule",(req,res) =>{
    res.render("schedule");
  });
  router.get("/dashboard",(req,res) =>{
    res.render("dashboard");
  });
  

module.exports = router;