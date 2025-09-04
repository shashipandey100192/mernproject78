const mongoose = require('mongoose');

const datapattern =new mongoose.Schema({
    fullname:{
        type:String
    },
    dob:{
        type:String
    },
    working:{
        type:Boolean
    }
});

const mypattern = mongoose.model("workers",datapattern);

module.exports = mypattern;



