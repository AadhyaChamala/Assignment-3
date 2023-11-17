let express = require('express');
let router = express.Router();

// Controller function for rendering the home page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home' });
  };

 
// Controller function for rendering the about page
  module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' });
  }

  
// Controller function for rendering the projects page
  module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', { title: 'Projects' });
  }

  
// Controller function for rendering the contact page
  module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact us' });
  }