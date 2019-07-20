var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("auctions get routes");
});

router.get("/new", function(req, res, next) {
  res.send("auctions/new get routes");
});

router.get("/:id", function(req, res, next) {
  res.send("auctions id get routes");
});

router.post("/", function(req, res, next) {
  res.send("auctions post routes");
});

module.exports = router;