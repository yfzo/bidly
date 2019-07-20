var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("register get routes here");
});

router.post("/", function(req, res, next) {
  res.send("register get routes here");
});

module.exports = router;