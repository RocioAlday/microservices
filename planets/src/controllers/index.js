const { catchAsync }= require("../utils");

module.exports= {
    getPlanets: catchAsync(require("./getPlanets")),
    getPlanetById: catchAsync(require("./getPlanetById")),
    createPlanet: catchAsync(require("./createPlanet"))
}