let express = require('express');
let router = express.Router();
//const { router } = require('../config/app');
let Certifications = require('../models/certifications');

// Controller function for displaying the list of certifications
module.exports.DislayCertificationlist = async (req,res,next)=>{ //< Mark function as async
    try{
       const CertificationList = await Certifications.find(); //< Use of await keyword
       res.render('certifications/list', {
          title: 'Certifications', 
          CertificationList: CertificationList
       });
    }catch(err){
       console.error(err);
       //Handle error
       res.render('certifications/list', {
          error: 'Error on server'
       });
    }
 };
 // Controller function for rendering the add certifications page
 module.exports.AddCertifications = async (req,res,next)=>{
    try{
        res.render('certifications/add',
        {
            title:'Add Certifications'
        })
    }
    catch(err)
    {
        console.error(err);
        res.render('certifications/list',
        {
            error: 'Error on the server'
        });
    }
};
// Controller function for processing the addition of certifications
module.exports.ProcessCertifications = async (req,res,next)=>{
    try{
        let newCertifications = Certifications({
            "name":req.body.name,
            "company": req.body.company,
            "date_of_issue": req.body.date_of_issue,
            "description": req.body.description,
           
        });
        Certifications.create(newCertifications).then(() =>{
            res.redirect('/certifications-list')
        })
    }
    catch(err){
        console.error(err);
        res.render('certifications/list',
        {
            error: 'Error on the server'
        });
    }
};
// Controller function for rendering the edit certifications page
module.exports.EditCertifications = async (req,res,next)=>{
    try{
    const id = req.params.id;
    const certificationsToEdit = await Certifications.findById(id);
    res.render('certifications/edit',
    {
        title:'Edit Certifications',
        Certifications:certificationsToEdit
    })
}
catch(err){
    console.error(err);
    res.render('certifications/list',
    {
        error: 'Error on the server'
    });
}
}
// Controller function for processing the edit of certifications
module.exports.ProcessEditCertifications = (req,res,next)=>{
    try{
        const id = req.params.id;
        let updatedCertifications = Certifications({
            "_id":id,
            "name":req.body.name,
            "company": req.body.company,
            "date_of_issue": req.body.date_of_issue,
            "description": req.body.description,
            
        });
        Certifications.findByIdAndUpdate(id,updatedCertifications).then(()=>{
            res.redirect('/certifications-list')
        });
    }
    catch(err){
        console.error(err);
        res.render('certifications/list',
        {
            error: 'Error on the server'
        });
    }
}
// Controller function for deleting certifications
module.exports.DeleteCertifications = (req,res,next)=>{
    try{
        let id = req.params.id;
        Certifications.deleteOne({_id:id}).then(() =>
        {
            res.redirect('/certifications-list')
        })
    }
    catch(err){
        console.error(err);
        res.render('certifications/list',
        {
            error: 'Error on the server'
        });
    }
}