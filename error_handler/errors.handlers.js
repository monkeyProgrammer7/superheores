const logErrors=(err, req, res, next)=>{
    console.log('Function logerrors');
    next(err)
};
const errorsHandlers = (err, req, res, next)=>{
    console.log('Function ErrorsHandlers');
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
    next(err);
};
const boomErrosHandlers = (err, req, res, next)=>{
    if(err)
    throw  Boom.boomify(error, {statusCode: 502})
};
module.exports={logErrors, errorsHandlers, boomErrosHandlers}