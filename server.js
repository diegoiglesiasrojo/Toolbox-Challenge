const express = require("express");
const cors = require("cors");

const constants = require("./constants");
const router = require("./route/index.js");

const app = express();

app.listen(constants.port, constants.host, () => {
  console.log("Server created successfully on port " + constants.port);
  console.log("Server created successfully with host: " + constants.host);
});
app.use(cors());
app.use(express.json());

app.use("/files", router);

module.exports = app;
