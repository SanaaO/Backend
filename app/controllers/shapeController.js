const Shape = require("../models/shape");

//create new 3D object and store it into database
exports.addShape = (req, res) => {
  const shape = new Shape(req.body);
  shape.save().then((result) => {
    res.status(200).json({ statuts: "Success", data: result });
  });
};

//update 3D object with selected id
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

//retreive 3D Object stored in database by id
exports.findByID = (req, res) => {
  const id = req.query.id;
  if (id) {
    Shape.findById(id).then((result) => {
      res.status(200).json({ statuts: "Success", data: result });
    });
  } else {
    res.status(400).send({ message: " missing id param !" });
  }
};

//get all 3D objects stored in database
exports.findAll = (req, res) => {
  Shape.find().then((result) => {
    res.status(200).json({ status: "Success", data: result });
  });
};

exports.delete = (req, res) => {
  const id = req.query.id;
  if (id) {
    Shape.findByIdAndDelete(id).then((result) => {
      res.status(200).json({ statuts: "Success", data: result });
    });
  } else {
    res.status(400).send({ message: " missing id param !" });
  }
};

exports.deleteAll = (req, res) => {
  Shape.deleteMany().then((result) => {
    res.status(200).json({ status: "Success", data: result });
  });
};
