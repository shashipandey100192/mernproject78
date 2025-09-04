const express = require('express');
const myapp = express();
const cors = require('cors');
const myrouting = require('./approuting/approut');
require("dotenv").config();
require("./database/mydb");
const port = process.env.PORT || 7500




myapp.use(express.json());
myapp.use(cors());
myapp.use(myrouting);



myapp.listen(port,()=>{
    console.log(`server is runnning at port no:${port}`);
})
