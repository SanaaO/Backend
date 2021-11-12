const Shape = require("../models/shape");

exports.addShape = (req, res) => {
  const shape = new Shape(req.body);
  shape.save().then((result) => {
    res.status(200).json({ statuts: "Success", data: result });
  });
};
