const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShapeSchema = new Schema({
  type: {
    type: String,
    require: true,
  },

  geometry: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Shape", ShapeSchema);
