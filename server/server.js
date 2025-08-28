const express = require('express');
// console.log(express);

const myapp = express();

myapp.get("/",(req,res)=>{
    res.send("this is my default response");
})


myapp.listen(4500,()=>{
    console.log("server is runnning");
})
