var express = require("express");
var router = express.Router();

// define the home page route
router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
