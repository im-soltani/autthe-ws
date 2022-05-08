//require express
const express=require("express");
//require connectDB
const connectDB = require("./config/connectDB");
const authRouter=require('./routes/auth')
//init express
const app=express();

//Middleare==>parse the DATA TO JSON 
app.use(express.json())
//connectDB
connectDB();

//use routes
app.use('/api/auth',authRouter)





//create port
const port=4000

//lunch the server
app.listen(port,(error)=>
error?console.log(error):console.log(`the server is running on port ${port}`))