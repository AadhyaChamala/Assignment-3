//* Creating routes *//

let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');
/* this is to get home page. */
router.get('/', indexController.displayHomePage );

/* this is to get home page. */
router.get('/home', indexController.displayHomePage );


/* this is to get 'about' page. */
router.get('/about', indexController.displayAboutPage );

/* this is to get projects page. */
router.get('/projects', indexController.displayProjectsPage );


/* this is to get contact page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;