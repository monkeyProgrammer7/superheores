const mongoose = require('mongoose');
const user_schema = mongoose.Schema({
    product_name: String,
    price:Number,
    image:String
 
});