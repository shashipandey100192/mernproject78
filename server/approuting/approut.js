'Access-Control-Allow-Origin'
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');

const appmenu = require("../schemas/appmenu");
const myschema = require("../schemas/generalinfo");
const verifyToken = require('../approuting/medialwere/backauth');
const myapp = express.Router();


const mykey = "mernfullstack";

myapp.get("/",(req,res)=>{
    res.send("this is my default response sdfsdfsdf000000000000000000");
});

myapp.get("/about",(req,res)=>{
    res.send("this is about page");
});



myapp.get("/applist", async (req,res)=>{
    const appdata = await appmenu.find();
    res.send({applist:appdata,status:250,msg:"menu list"});
});


myapp.post("/createuser", async(req,res)=>{
    const mydata = {email,dob,pass,gender,phone,pic} = req.body;
            if(email=="")
            {
                res.send({msg:"email is required"});
            }
            else{
                const myemail = await myschema.findOne({"email":email})
                console.log(myemail);
                if(myemail)
                {
                    res.send({msg:"email already existing !!",exitingemail:myemail,status:450});
                }
                else
                {
                    
                    const haspass = await bcrypt.hash(pass,10);
                    const postdata = await myschema({email,dob,pass:haspass,gender,phone,pic}).save();
                    res.send({msg:"successfully registor",exitingemail:postdata,status:251});
                     
                }

            }

});


myapp.post("/userlogin",async(req,res)=>{
        const logindata = {email,pass} = req.body;
        console.log(logindata);
        if(email=="")
        {
            res.send({msg:"email is required",status:420});
        }
        else
        {
            const allemailid = await myschema.findOne({"email":email});
                if(allemailid==null)
                {
                    res.send({msg:"email is not valid",status:320});
                }
           
                // else if(allemailid.email==email && allemailid.pass==pass)
                else if(allemailid.email==email && bcrypt.compare(pass,allemailid.pass))
                {
                     const token = jwt.sign({ email: allemailid.email, pass: allemailid.pass}, mykey, {
                            expiresIn: '1h'
                    });
                    
                    res.set("authorization", `Bearer ${token}`);
                    
                    res.send({msg:"successfuly login",status:200,mytoken:token});
                }
                else
                {
                    res.send({msg:"email and password don't match!",status:421});
                }
        }
});
   

myapp.delete("/deleteemp/:id", verifyToken, async(req,res)=>{
        const id = req.params.id;
            const del = await myschema.findByIdAndDelete({_id:id});
         res.send({msg:"delete successfully",status:101});
})



myapp.get("/singleemployee/:id", async(req,res)=>{
        const id = req.params.id;
            const single = await myschema.findById({_id:id});
         res.send({msg:"find successfully",status:105,user:single});
});

myapp.patch("/updateemployee/:id", async (req,res)=>{
    const id = req.params.id;
        const single = await myschema.findByIdAndUpdate(id,req.body,{new:true});
        res.send({msg:"update successfully",status:108,user:single});
});


myapp.get("/allworker",verifyToken, async (req,res)=>{
    const alldata = await myschema.find();
    res.send({alldatalist:alldata,status:250,msg:"all worker list"});
});



module.exports = myapp