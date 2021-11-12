require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT;
const URL = process.env.DB_URL;

//connection to database
mongoose
  .connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log("Server running on port : " + PORT);
    });
  })
  .catch((err) => console.log("error => ", err));
