const Shape = require("../models/shape");

exports.addShape = (req, res) => {
  const shape = new Shape(req.body);
  shape.save().then((result) => {
    res.status(200).json({ statuts: "Success", data: result });
  });
};

exports.update = (req, res) => {
  const id = req.query.id;
  if (id) {
    Shape.findByIdAndUpdate(id, req.body, { new: true }).then((result) => {
      res.status(200).json({ statuts: "Success", data: result });
    });
  } else {
    res.status(400).send({ message: " missing id param !" });
  }
};
