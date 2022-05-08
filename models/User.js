//require mongoose
const mongoose=require("mongoose")

//Require schema from mongoose
const Schema=mongoose.Schema
//Create the user schema
const userSchema=new Schema({
    name:{
    type:String,
   
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        }


})
module.exports=User=mongoose.model('User',userSchema)