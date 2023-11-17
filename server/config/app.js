let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
var router = express.Router();

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// Importing the Mongoose library for MongoDB interactions
let mongoose = require('mongoose');
// Accessing the MongoDB connection object from Mongoose
let mongoDB = mongoose.connection;
// Importing the MongoDB URI from a separate 'db.js' file
let DB = require('./db');

// Event listener for handling MongoDB connection errors,a successful MongoDB connection
mongoose.connect(DB.URI);
mongoDB.on('error',console.error.bind(console,'Connection Error'));
mongoDB.once('open',()=>{console.log("Mongo DB is connected")});

// Importing route handlers for different parts of the application
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let certificationsRouter = require('../routes/certifications');

app.use('/', indexRouter);
app.use('/users', usersRouter);
// Setting up a route in the Express application to use the 'certificationsRouter' for handling requests
app.use('/certifications-list',certificationsRouter);

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
  res.render('error',{title:"Error"});
});

module.exports = app;
