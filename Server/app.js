const express = require("express");
const app=express();
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose = require("mongoose");
require("dotenv").config();

// mongoDb conection
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Succesfully Connected!");
})

// port
const Port = process.env.PORT ;
app.listen(Port, ()=>{
    console.log(`Server run on Port ${Port}`);
})