const express = require('express');

const myapp = express.Router();
const myschema = require("../schemas/generalinfo");
const appmenu = require("../schemas/appmenu");

myapp.get("/",(req,res)=>{
    res.send("this is my default response sdfsdfsdf000000000000000000");
});

myapp.get("/about",(req,res)=>{
    res.send("this is about page");
});

myapp.get("/allworker", async (req,res)=>{
    const alldata = await myschema.find();
    res.send({alldatalist:alldata,status:250,msg:"all worker list"});
});

myapp.get("/applist", async (req,res)=>{
    const appdata = await appmenu.find();
    res.send({applist:appdata,status:250,msg:"menu list"});
})



module.exports = myapp