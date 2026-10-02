const express=require('express');
const app=express()
const userModel=require('./models/user.model')
app.use(express.json())




module.exports=app