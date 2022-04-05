const superheroSchema = require('../models/superhero_v2.model');
const superheroRoute = require('../routes/superhero_v2.router');
class SuperheroService{
    /**funciones asincronas devuelve una promesa */
    async createSuperhero(superhero){
        superhero.save();
        return superhero;
    }
    async listSuperheroes(){
        return superheroSchema.find();
    }
    async findOnesuperhero(){
        return superheroSchema.findById({_id: superheroId});
    }
    async editSuperhero(superheroId,superhero, real_name, super_power){
        return superheroSchema.findById({_id: superheroId})
        .then((superheroE)=>{ if(!superheroE)throw error('No se encontro el superheroe');
        return superheroSchema.updateOne(
            {superheroId},
            {superhero, real_name, super_power})
    })
    }
    async removeSuperhero(superheroId){
        superheroSchema.deleteOne({superheroId});
    }

}
module.exports = SuperheroService;