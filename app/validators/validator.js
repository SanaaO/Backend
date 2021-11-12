const Joi = require("Joi");

const shapeValidator = Joi.object({
  type: Joi.string().alphanum().required(),
  geometry: Joi.object().min(1).required(),
});

module.exports = shapeValidator;
