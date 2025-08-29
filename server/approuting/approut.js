const express = require('express');

const myapp = express.Router()

myapp.get("/",(req,res)=>{
    res.send("this is my default response sdfsdfsdf000000000000000000");
});

myapp.get("/about",(req,res)=>{
    res.send("this is about page");
});


module.exports = myapp