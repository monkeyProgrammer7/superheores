const express = require('express');

const superhero_route_v2 = express.Router();
const SuperheroService = require('../services/superhero.service');
const superheroSchema = require('../models/superhero_v2.model')
const service = new SuperheroService;

/** envia una solicitud para guardar un superheroe en la lista */
superhero_route_v2.post('/superhero', async (req, res) => {
    const superhero = superheroSchema(req.body);
    await service
    .createSuperhero(superhero)
    .then((data)=>res.status(201).json(data))
    .catch((err)=>res.status(404).json({message:err}));
});
/**Envia una petición para obtener la lista de superheroes */
superhero_route_v2.get('/', async (req, res) => {
    await service
        .listSuperheroes()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json({ message: err }));
});
/**Envia la petición para encontrar un superheroe especifico por su id */
superhero_route_v2.get('/:superheroId', async (req, res) => {
    const { superheroId } = req.params;
    await service
        .findOneSuperHero(superheroId)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json({ message: err }));
});

/**Envia una petición para editar los parametros y caracteristicas de un sueperheroe */
superhero_route_v2.put('/:superheroId', async (req, res) => {
    const { superheroId } = req.params;
    const { superhero, real_name, super_power } = req.body;
    await service
        .editSuperHero(superheroId, superhero, real_name, super_power)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json({ message: err }));
});
/**Elimina un suoerheroe de la lista de superheroes */
superhero_route_v2.delete('/:superheroId', async (req, res) => {
    const { superheroId } = req.params;
    await service
        .removeSuperHero(superheroId)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json({ message: err }));
});
module.exports = superhero_route_v2;