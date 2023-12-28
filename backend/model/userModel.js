const mongoose = require('mongoose') ; 
const validator =  require('validator');  
const userSchema  =  new mongoose.Schema({ 
      name: {
        type: String, 
        required: [true ,"Please enter a valid username"],  
        maxLength:[30,"Maximum Limit Exceeded"],
        minLength : [5 , "Name should have more than 5 characters"]   
      },
       email: {
        type: String, 
        required: [true ,"Please enter a valid email"],
        validate: [validator.isEmail , "Please Enter a valid Email "]
      },
      gender: {
        type: String, 
        required: [true ,"Please enter a valid gender"],
      },
      status: {
        type: String, 
        required: [true ,"Please enter a valid status"],
      }
  
}) ;  

module.exports = mongoose.model('user' , userSchema) ; 