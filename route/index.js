const express = require("express");
const router = express.Router();
const dataControllers = require("../controllers/dataControllers.js");

router.route("/data").get(dataControllers.readData);

module.exports = router;
