const mongoose = require('mongoose');

const path = process.env.MYDATAPATH

mongoose.connect(path).then(()=>{
    console.log("db connected");
});






