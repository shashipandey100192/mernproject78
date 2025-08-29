const express = require('express');
const myapp = express();
const myrouting = require('./approuting/approut');
require("dotenv").config();
const port = process.env.PORT || 7500




myapp.use(myrouting);


myapp.listen(port,()=>{
    console.log(`server is runnning at port no:${port}`);
})
