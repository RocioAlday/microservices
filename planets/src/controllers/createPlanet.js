const Planets = require("../data");
const { response }= require("../utils");

module.exports= async (req, res) => {
    const payload= req.body;
    const planet= await Planets.create(payload);
    response(res, 200, planet);
}