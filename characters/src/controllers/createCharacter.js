const Characters = require("../data");
const { response }= require("../utils");

module.exports= async (req, res) => {
    const payload= req.body;
    const character= await Characters.create(payload);
    response(res, 200, character);
}