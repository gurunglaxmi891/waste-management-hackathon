var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/user_ward', function(req, res, next) {
  res.render('user_ward', { title: 'WP Notifier' });
});

module.exports = router;