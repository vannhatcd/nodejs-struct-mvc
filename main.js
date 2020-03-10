// import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config();
const apiRoutes = require("./server/routes/api");

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

// set up mongoose
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Database connected");
  })
  .catch(error => {
    console.log("Error connecting to database");
  });

// set up route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Project Support"
  });
});
// set up route
app.use("/api/", apiRoutes);

app.listen(process.env.API_POST, () => {
  console.log(`Our server is running on port.`);
});
