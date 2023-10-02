const { Router } = require("express");

const router = Router();

router.use("/characters", require("./charactersRouter"));

module.exports= router;