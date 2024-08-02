var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('signup')
});
router.post('/completesignup', async function(req, res, next){
  console.log(req.body)
  const user = await User.findOne({name: password })
  res.redirect('/login')
})

router.get('/login', function(req, res, next) {
  res.render('login')
});

router.get('/user_home', function(req, res, next) {
  res.render('user_home')
});

router.post('/completelogin', function(req, res, next){
  console.log(req.body)
})
module.exports = router;
