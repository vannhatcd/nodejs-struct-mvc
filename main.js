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
  .connect(process.env.MONGODB_URL || "mongodb://localhost:27017/dataphp")
  .then(() => {
    console.log("Database connected");
  })
  .catch(error => {
    console.log("Error connecting to database");
  });

// set up route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to NẮNG VIỆT !!!!"
  });
});
// set up route
app.use("/api/", apiRoutes);

app.listen(process.env.API_PORT || 4000, () => {
  console.log(`Tao bắt đầu chạy !!!`);
});
