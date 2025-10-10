'Access-Control-Allow-Origin'
const express = require('express');
const cors = require('cors');
require("dotenv").config();
require("./database/mydb");
const myrouting = require('./approuting/approut');
const myapp = express();


const port = process.env.PORT || 7500



myapp.use(cors());
myapp.use(express.json());
myapp.use(myrouting);



myapp.listen(port,()=>{
    console.log(`server is runnning at port no:${port}`);
})
