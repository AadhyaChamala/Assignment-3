let express = require('express');
let router = express.Router();
let mongoose = require('mongoose')
let Certifications = require('../models/certifications');
let CertificationsController = require('../controllers/certifications')


router.get('/', CertificationsController.DislayCertificationlist); // Route for displaying the list of certifications

router.get('/add', CertificationsController.AddCertifications);// Route for rendering the page to add certifications

router.post('/add',CertificationsController.ProcessCertifications);// Route for processing the addition of certifications

router.get('/edit/:id',CertificationsController.EditCertifications);// Route for rendering the page to edit certifications

router.post('/edit/:id',CertificationsController.ProcessEditCertifications);// Route for processing the editing of certifications

router.get('/delete/:id',CertificationsController.DeleteCertifications);// Route for processing the deletion of certifications

module.exports=router;