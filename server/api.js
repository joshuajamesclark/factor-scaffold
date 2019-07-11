var express = require("express");
var router = express.Router();
var db = require('../models/index');

// define the home page route
router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// Retrieve demo person created by example migration and seed
router.get("/dbexample", (req, res) => {
  db.People.findOne({
    where: {
      email: 'demo@demo.com'
    }
   // attributes: ['firstName']
  }).then(result => {
    res.send(result);
  });
});

module.exports = router;
