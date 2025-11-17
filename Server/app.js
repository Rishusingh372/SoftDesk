const express = require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
require("dotenv").config();
const adminRouter = require("./routers/adminRoute");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoDb conection
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB Succesfully Connected!");
}).catch((err)=>{
    console.log("DB Connection Failed!", err);
});

// routes
app.use("/admin", adminRouter);
// app.use("/employee" , empRouter);
// app.use("/user" , userRouter);

// port
const Port = process.env.PORT || 8000;
app.listen(Port, ()=>{
    console.log(`Server run on Port ${Port}`);
})