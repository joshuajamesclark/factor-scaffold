var express = require("express");
var router = express.Router();
const db = require('../models');

// define the home page route
router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
