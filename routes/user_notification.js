var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user_notification', function(req, res, next) {
  res.render('user_notification');
});

module.exports = router;