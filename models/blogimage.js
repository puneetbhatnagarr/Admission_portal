const mongoose = require('mongoose');

// define schema

const BlogimageSchema = new mongoose.Schema({
   
    title:{type:String, required:true, trim:true},
    discription:{type:String,required:true},
    image:{type : String},

   
    // timestamp:true
},{timestamps:true})


// model create

const BlogimageModel = mongoose.model('blogimage',BlogimageSchema);

module.exports = BlogimageModel
