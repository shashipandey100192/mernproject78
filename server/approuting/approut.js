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
});

myapp.post("/createuser", async(req,res)=>{
    const mydata = {email,dob,pass,gender,phone} = req.body;
            if(email=="")
            {
                res.send({msg:"email is required"});
            }
            else{
                const myemail = await myschema.findOne({"email":email})
                console.log(myemail);
                if(myemail)
                {
                    res.send({msg:"this email is avail",exitingemail:myemail});
                }
                else
                {
                    const postdata = await myschema({email,dob,pass,gender,phone}).save();
                    res.send({msg:"not existing email",exitingemail:postdata});
                     
                }

            }
            

    


})



module.exports = myapp