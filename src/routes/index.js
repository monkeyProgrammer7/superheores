const express = require('express');
const superheroRouterV2 =  require('./superhero_v2.router');
function routerApi(app){
    const router = express.Router();
    /**endpoint estático http://localhost:5000/api/v1 */
    app.use('/api/v2', router);
    //http://localhost:5000/api/v1/superheroes
    //router.use('/superheroes', superheroRouter);
    //http://localhost:5000/api/v2/superheroes_V2
    router.use('/superheroes_v2', superheroRouterV2)
}
module.exports = routerApi;