const { catchAsync }= require("../utils");
module.exports= {
    getFilms: catchAsync(require("./getFilms")),
    getFilmById: catchAsync(require("./getFilmById")),
    createFilm:  catchAsync(require("./createFilm"))
}