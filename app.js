var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRoutes = require('./routes/admin');
var cityRouter = require('./routes/city');
var userWardRouter = require('./routes/user_ward');
var userScheduleRouter = require('./routes/user_schedule');
var userNotificationRouter = require('./routes/user_notification');
var homeRouter = require('./routes/home');
var dashboardRouter = require('./routes/admin');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRoutes);
app.use('/dashboard', dashboardRouter);

app.use('/city', cityRouter);

app.use('/user_ward', userWardRouter);
app.use('/user_schedule', userScheduleRouter);
app.use('/home', homeRouter);
app.use('/user_notification', userNotificationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
