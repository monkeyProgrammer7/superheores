const Boom = require('hapi/boom');
const serie_schema = require('../models/series_tv.model')

class SeriesTvService{

async showSerie(serieId){
    if(!serieFind ) throw Boom.notFound('No se encontro la serie consultada')
    return
}
async editSerie(serieId, serie, number_season,
    original_language,
    feature_seasons){1
        return serie_schema.findById({id: serieId}).then((serieFind)=>{
            if(!serie)
            return serie_schema.updateone({serieId},{serie})
        })
    }
}