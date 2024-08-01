var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user_schedule', function(req, res, next) {
  res.render('user_schedule');
});

module.exports = router;