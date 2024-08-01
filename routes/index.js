const express = require('express');
const router = express.Router();

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).send('Access denied');
  }
};

// Admin panel route
router.get('/admin', isAdmin, (req, res) => {
  res.render('admin-panel', { adminName: req.user.name });
});

module.exports = router;