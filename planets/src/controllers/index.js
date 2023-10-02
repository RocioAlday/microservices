const { catchAsync }= require("../utils/catchAsync");

module.exports= {
    getPlanets: catchAsync(require("./getPlanets")),
    getPlanetById: catchAsync(require("./getPlanetById")),
    createPlanet: catchAsync(require("./createPlanet"))
}