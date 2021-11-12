const middleware = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.log("error: " + error.message);
      res.status(400).json({ status: "Failed", response: error.message });
    }
  };
};
module.exports = middleware;
