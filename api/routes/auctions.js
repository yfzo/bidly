var express = require("express");
var router = express.Router();

module.exports = (knex) => {

  //send all categories(for side bar) and auctions data
router.get("/", function(req, res, next) {
  sendingData = []
  knex
    .select("*")
    .from("auctions")
    .then((auc_row) => {
      knex
        .select("*")
        .from("categories")
        .then((cat_row) => {
        // console.log({category: cat_row, auctions: auc_row})
        res.send({category: cat_row, auctions: auc_row});
      })
    })
});

router.get("/new", function(req, res, next) {
  res.send("auctions/new get routes");
});

//find the id from params and send its data
router.get("/:id", function(req, res, next) {
  console.log('reached auctions/:id route')
  console.log(req.params)
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

//create a new auction
router.post("/", function(req, res, next) {
  if (JSON.stringify(req.body) !== '{}') {
    //how should i get the start-time?
    //how should i conver the time?

      knex('auction').insert({
          id: uuid(2), //for now
          category_id: req.body.category,
          name: req.body.name,
          description: req.body.description,
          min_bid: req.body.min_bid,
          start_time: "",
          end_time: req.body.end_time,
          image: req.body.image,
          user_id: req.body.user_id
      }).then(() => {
          console.log('bid posted')
      }).catch((err) => {
          console.log(err)
      })
  }
})

return router
}