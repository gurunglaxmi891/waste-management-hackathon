var express = require('express');
var router = express.Router();
var profile=require('../data/profile')

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('signup')
});

router.get('/login', function(req, res, next) {
  console.log('GET/login');
  res.render('login',{error:null});
});

router.post('/login', (req, res) => {
  console.log('POST /login');
  const { username, password } = req.body;

  const user = profile.find(user => user.username === username && user.password === password);

  if (user) {
      res.redirect('/admin/dashboard');
  } else {
      res.render('login', { error: 'You have not signed up yet. Please sign up before logging in.' });
  }
});

router.get('/user_home', function(req, res, next) {
  res.render('user_home')
});

module.exports = router;
