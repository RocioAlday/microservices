const { Router } = require("express");

const router = Router();


router.use("/planets", require("./planetsRouter"));

module.exports= router;