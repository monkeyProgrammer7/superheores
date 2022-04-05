const mongoose=require('mongoose');
const superheroSchema = mongoose.Schema({
superhero:{ type:String,
    require:true,
    unique:true
},
real_name:{
    type:String,
    require:true,
},
features :{
    type: Object,
    require : true,
    universe: {type:String, reuire : true},
    super_powers:{type: Array, require: true},
},

superhero_sidekick:{
    type: Object,
    require: true,
    sidekick:{type: String, require: true},
    side_powers:{type:Array, require: true},
},
});
module.exports = mongoose.model('SuperheroCollection', superheroSchema);