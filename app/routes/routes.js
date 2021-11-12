const express = require("express");
const shapeController = require("../controllers/shapeController");
const middleware = require("../middlewares/middlware");
const shapeValidator = require("../validators/validator");
const Router = express.Router();

Router.post("/add", middleware(shapeValidator), shapeController.addShape);
Router.put("/update", middleware(shapeValidator), shapeController.update);
Router.get("/get", shapeController.findByID);
Router.get("/getAll", shapeController.findAll);
Router.delete("/delete", shapeController.delete);
Router.delete("/deleteAll", shapeController.deleteAll);

module.exports = Router;
