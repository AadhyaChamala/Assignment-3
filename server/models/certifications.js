let mongoose = require('mongoose'); // Importing the Mongoose library for MongoDB interactions

// Defining a Mongoose schema for the 'certifications' collection
let certificationsModel = mongoose.Schema({
    name:String,
    company: String,
    date_of_issue: Number,
    description: String
},
{
        collection: "cert" // Specifying the collection name as 'cert'
});
// Creating and exporting the Mongoose model for the 'Certifications' collection
module.exports = mongoose.model('Certifications',certificationsModel);


