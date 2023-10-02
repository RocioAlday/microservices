const Films = require("../data");
const { response }= require("../utils");

module.exports= async (req, res) => {
    const payload= req.body;
    const film= await Films.create(payload);
    response(res, 200, film);
}