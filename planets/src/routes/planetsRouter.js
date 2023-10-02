const { Router } = require("express");
const planetsRouter = Router();
const controllers= require("../controllers");

planetsRouter.get("/", controllers.getPlanets);

module.exports = planetsRouter;
