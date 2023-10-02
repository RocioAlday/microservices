module.exports= (fn) => { //fn seria el controller
    return function(req, res, next) {
        fn(req, res).catch((err)=> {
            next(err)  //va al manejador de errores de express
        })
    }
}