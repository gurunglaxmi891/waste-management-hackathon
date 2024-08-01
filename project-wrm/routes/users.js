var express = require('express');
var router = express.Router();

// add a new route for login page

router.get("/login",(req,res) =>{
    res.render("login");
  });
 router.get("/signup",(req,res) =>{
    res.render("signup");
  });


module.exports = router;