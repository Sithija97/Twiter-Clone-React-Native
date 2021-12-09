const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();

// api
const routes = require("./routes/router");

// app middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

// db connection
require("./db/mongoose");

app.listen(8800, () => {
  console.log("Backend server is running !");
});
