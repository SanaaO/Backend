const express = require("express");
const shapeController = require("../controllers/shapeController");
const Router = express.Router();

Router.post("/add", shapeController.addShape);
Router.put("/update", shapeController.update);
Router.get("/get", shapeController.findByID);
Router.get("/getAll", shapeController.findAll);
Router.delete("/delete", shapeController.delete);
Router.delete("/deleteAll", shapeController.deleteAll);

module.exports = Router;
