var express = require('express');
var router = express.Router();

/* GET admin profile. */
router.get('/profile', function(req, res, next) {
  res.render("profile");
});


module.exports = router;
