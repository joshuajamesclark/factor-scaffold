const bodyParser = require("body-parser");
const api = require("./api");
const db = require('../models');

module.exports = app => {
  app.use(bodyParser.json());
  app.use("/api", api);
};
