const mongoose = require('mongoose');
const user_schema = mongoose.Schema({
    name: String,
    lastname:String,
    adress:{
        city:String,
        code_zip:String,
        street:String
    },
    contact:{
        telephone: String,
        email:String
    }
});