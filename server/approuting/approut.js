const express = require('express');

const myapp = express.Router();
const myschema = require("../schemas/generalinfo");

myapp.get("/",(req,res)=>{
    res.send("this is my default response sdfsdfsdf000000000000000000");
});

myapp.get("/about",(req,res)=>{
    res.send("this is about page");
});

myapp.get("/allworker", async (req,res)=>{
    const alldata = await myschema.find();
    res.send({alldatalist:alldata,status:250,msg:"all worker list"});
})


module.exports = myapp