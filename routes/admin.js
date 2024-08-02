var express = require('express');
var router = express.Router();
var profile = require('../data/profile');
var schedules = require('../data/schedules'); // Import your schedule data


// add a new route for schedule page

router.get("/schedule",(req,res) =>{
    res.render("schedule",{schedules});
  });

// Add new schedule
router.post('/schedule/add', (req, res) => {
  const { time, event, location } = req.body;
  const newSchedule = { id: Date.now().toString(), time, event, location };
  schedules.push(newSchedule);
  res.redirect('/admin/schedule');
});

// Edit schedule page
router.get('/schedule/edit/:id', (req, res) => {
  const schedule = schedules.find(sch => sch.id === req.params.id);
  res.render('editSchedule', { schedule });
});

// Update schedule
router.post('/schedule/edit/:id', (req, res) => {
  const { time, event, location } = req.body;
  const index = schedules.findIndex(sch => sch.id === req.params.id);
  schedules[index] = { id: req.params.id, time, event, location };
  res.redirect('/admin/schedule');
});

// Delete schedule
router.delete('/schedule/delete/:id', (req, res) => {
  const index = schedules.findIndex(sch => sch.id === req.params.id);
  if (index !== -1) {
      schedules.splice(index, 1);
      res.json({ success: true });
  } else {
      res.json({ success: false });
  }
});



  router.get("/dashboard",(req,res) =>{
    res.render("dashboard");
  });
  

router.get("/profile",(req,res) =>{
  res.render("profile",{admin: profile});

  });

module.exports = router;