const express = require('express');
const app = express();

// Mock data
const data = {
  totalUsers: 100,
  totalCities: 10,
  totalWards: 50
};

app.set('view engine', 'ejs');

app.get('/admin/dashboard', (req, res) => {
  res.render('admin-panel', { page: 'dashboard', ...data });
});

app.get('/admin/users', (req, res) => {
  res.render('admin-panel', { page: 'users', ...data });
});

app.get('/admin/cities', (req, res) => {
  res.render('admin-panel', { page: 'cities', ...data });
});

app.get('/admin/wards', (req, res) => {
  res.render('admin-panel', { page: 'wards', ...data });
});

app.get('/admin/profile', (req, res) => {
  res.render('admin-panel', { page: 'profile', ...data });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
