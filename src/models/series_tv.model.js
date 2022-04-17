const mongoose = require('mongoose');
const serie_schema= mongoose.Schema({
    serie:{type: String, require:true, unique:true},
    number_seasom:{type: Number, require:true},
    original_language:{type:String, require:true},
    feature_seasons:[{
        type: Object,
        require: true,
        cast:[{type:String, require:true}],
        season_name:{type:String, require:true},
        episodes:{
            type: Object,
            require:true,
            episode_description:{type:String, reuquire:true},
            duration:{type:Number, require:true}
        },
    }],
});
module.exports = mongoose.model('SeriesCollection', serie_schema);
