const express = require("express");
const shapeController = require("../controllers/shapeController");
const Router = express.Router();

Router.post("/add", shapeController.addShape);

module.exports = Router;
