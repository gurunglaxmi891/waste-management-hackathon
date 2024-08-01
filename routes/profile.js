var express = require('express');
var router = express.Router();
router.get("/profile",(req,res) =>{
  res.render("profile");
});

module.exports = router;