
//require express
const express = require('express')
const router = express.Router()
//require the user schema
const User=require('../models/User')

router.post('/regitser',async(req,res)=>{
   const{name,email,password}=req.body;
   try{
       //check for existing user
       let user=await User.findOne({email})

       if(user){
      return res.json({msg:'user already exists'})
       }
       //create the user
       user=new User({name,email,password})
       await user.save()
       console.log(user,"rrrrr")
       res.send({msg:'user registered with success'})
   }
   catch(error){res.send({msg:"server error",error})}
})


//login
router.post('/login',async(req,res)=>{
    const{email,password}=req.body
    try{
      //check for existing user
      let user =await User.findOne({email})

      if(!user){
          return res.send({msg:'Bad Credential! email'})
      }
      res.send({msg:'logged in with success'})
    }
      catch(error){
          res.send({msg:'server error'})
      }

      
    
})

module.exports=router



 

