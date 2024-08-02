var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('signup')
});

router.get('/login', function(req, res, next) {
  res.render('login')
});

router.get('/user_home', function(req, res, next) {
  res.render('user_home')
});

module.exports = router;
