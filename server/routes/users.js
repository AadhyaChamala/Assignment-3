// Importing the Express framework and creating a router instance
var express = require('express');
var router = express.Router();

// Route for handling HTTP GET requests to the root path ('/')
router.get('/', function(req, res, next) {
  res.send('This is a user page');
});

module.exports = router;
