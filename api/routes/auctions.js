var express = require("express");
var router = express.Router();

module.exports = (knex) => {

  router.get("/new", function(req, res, next) {
    res.json("new route!");
  });
  
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
        res.send({category: cat_row, auctions: auc_row});
      })
    })
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
});


//create a new auction
router.post("/", function(req, res, next) {
  console.log('reached auction post route')

  //calculate one minute ahead 
  oneHourAhead = Date.now() + 1000 * 60 * 60

  if (JSON.stringify(req.body) !== '{}' && req.body.category && req.body.name && req.body.description && req.body.min_bid && req.body.image) {
      knex('auctions').insert({
          category_id: req.body.category,
          name: req.body.name,
          description: req.body.description,
          min_bid: req.body.min_bid,
          end_time: oneHourAhead,
          image: req.body.image,
          user_id: req.body.user_id
      }).then((response) => {
          console.log('auction posted')
          res.send(response)
      }).catch((err) => {
          res.send(err)
          console.log(err)      
    })
  }
})
return router
}
