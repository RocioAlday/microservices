const { Router } = require("express");

const router = Router();


router.use("/films", require("./filmsRouter"));

module.exports = router;
