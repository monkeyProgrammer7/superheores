const _instance_service= new SerieService();
series_routes.post('/serie', async(req, res)=>{
    try{
        const serie = serie_schema(req.body);
        const data = await _instance_service.createSerie(serie);
        res.satatus(201).json(data);
    }catch(error){
        res.status(500).json({message: error});
    }
})
series_routes.get('/:serieId', async(req, res, next)=>{
    try{
        const {serieId}= req.paramas;
    } catch(error){
        res.status(400).json({message: error});
    }
})

serie_routes.put('/:serieId', async(req, res, next)=>{
    try{
        const {serieId}= req.paramas;
        const {serie, number_seasons, original_language, feature_seasons}= req.paramas;
        const data =  await _instance_service.editSerie(serie, number_seasons, original_language, feature_seasons);
    } catch(error){
        res.status(400).json({message: error});
    }
    
})