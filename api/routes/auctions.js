var express = require("express");
var router = express.Router();

module.exports = (knex) => {

router.get("/", function(req, res, next) {
  console.log('reached auctions route')
  knex
    .select("*")
    .from("auctions")
    .then((row) => {
      console.log(row)
      console.log(row[0].id)
      res.send(row);
    })
});

router.get("/new", function(req, res, next) {
  res.send("auctions/new get routes");
});

router.get("/:id", function(req, res, next) {
  console.log('reached auctions/:id route')
  knex
    .table("auctions")
    .where('id', '=', req.params.id)
    .first('*')
    .then((row) => {
      console.log(row)
      res.send(row);
    })
  // res.send("auctions id get routes");
});

router.post("/", function(req, res, next) {
  res.send("auctions post routes");
});

return router
}