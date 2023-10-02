const { Router }= require("express");
const router= Router();
const store= require("../database");
const { validateModel }= require("../middlewares");
const { catchAsync }= require("../../utils");
const { response }= require("../../utils");

router.get("/:model", validateModel, catchAsync(async (req, res)=> {
    const { model }= req.params;
    const result= await store[model].list();
    response(res, 200, result);
}));

router.get("/:model/:id", validateModel, catchAsync(async (req, res)=> {
    const { model, id }= req.params;
    const result= await store[model].get(id);
    response(res, 200, result);
}));

router.post("/:model", validateModel, catchAsync(async (req, res)=> {
    const { model }= req.params;
    const newModel= req.body;
    const result= await store[model].insert(newModel);
    response(res, 200, result);
}));

module.exports= router;