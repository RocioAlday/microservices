const { Router } = require("express");
const controllers= require("../controllers");

const filmsRouter = Router();

filmsRouter.get("/", controllers.getFilms);
filmsRouter.get("/:id", controllers.getFilmById);
filmsRouter.post("/", controllers.createFilm);

module.exports = filmsRouter;
