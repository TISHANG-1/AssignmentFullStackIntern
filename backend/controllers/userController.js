const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User  =  require('../model/userModel') ; 
const ErrorHandler = require('../utils/errorhandler');


exports.createUser = catchAsyncErrors(async(req , res , next)=>{ 
       const user =  await User.create(req.body)  ; 
       res.status(200).send({success:true , 
         user_: user  })
}) ; 

exports.updateUser = catchAsyncErrors(async(req , res, next)=>{   
     const id = req.params.id; 
     const user  = req.body; 
     const tempUser  = User.findById(id) ; 
     if(!tempUser){ 
         return next(new ErrorHandler("User not found" , 404)) ; 
     }
     const _ = await User.findByIdAndUpdate(req.params.id ,  req.body , {new: true , runValidators: true , useFindAndModify: false} ) ; 
   

     res.status(200).send({
         success: true , 
         message: "update Successfully"
     }) ; 
     
}) ;  

exports.getAllUser =  catchAsyncErrors(async(req , res , next)=>{ 
      const user  =   await User.find() ;   
      res.status(200).send({success:true , users:user }) ; 
}) ; 
