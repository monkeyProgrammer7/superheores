require('dotenv').config()
const express = require('express')
const routerApi = require('./src/routes')
const cors = require('cors')
const axios = require('axios');
const app = express();
const PORT = process.env.PORT;
const { dbConnect } = require('./config/mongo');
//para permitir cuerpo json en los request post http
app.use(express.json());
dbConnect();
app.listen(PORT, () => {
    console.log('API lista por el puerto', PORT)
})
routerApi(app);

// axios.post('http://localhost:3001/api/v2/superheroes_v2/superhero', {
//     "superhero_name": "Batman",
//     "real_name": "Bruce Wayne",
//     "features": [{
//         "universe": "DC",
//         "super_powers": ["Be rich"],
//     }],
//     "superhero_sidekick": [{
//         "sidekick": "Robin",
//         "side_powers": ["have a sad history", "agility"]
//     }]

// })
//     .then((response) => {
//         console.log(response);
//     }).catch((err) => {
//         console.log(err);
//     })