const express = require('express'); 
const router  =  express.Router() ;   
const user = require('../controllers/userController.js') ;   


// create a user
router.route('/create-user').post(user.createUser);  
// update a user
router.route('/update-user/:id').put(user.updateUser) ;   
// get all the user
router.route('/users').get(user.getAllUser) ; 



module.exports = router ; 

