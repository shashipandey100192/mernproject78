const mongoose = require('mongoose');

const datapattern =new mongoose.Schema({
    email:{
        type:String
    },
    dob:{
        type:String
    },
    gender:{
        type:String
    },
    pass:{
        type:String
    },
    phone:{
        type:String
    }
});

const mypattern = mongoose.model("workers",datapattern);

module.exports = mypattern;



