const express = require("express");
const cors = require("cors");

const constants = require("./constants");
// import constants from "./constants.js";
// const router = require("./route/index.js");

const app = express();

app.listen(constants.port, constants.host, () => {
  console.log("Server created successfully on port " + constants.port);
  console.log("Server created successfully with host: " + constants.host);
});
app.use(cors());
app.use(express.json());

// app.use("/api", router);
