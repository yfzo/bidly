var express = require("express");
var router = express.Router();

module.exports = (knex) => {

  router.get("/new", function(req, res, next) {
    knex
    .select("*")
    .from("categories")
    .then((cat_row) => {
      res.json(cat_row);
    })
    .catch((err) => {console.log(err)})
})
  
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
          res.json({category: cat_row, auctions: auc_row});
      })
    })
});


//find the id from params and send its data
router.get("/:id", function(req, res, next) {
  console.log('reached auctions/:id route')
  console.log("ERROR IS IN GET ROUTE FOR AUCTIONS/:ID", req.params)
  knex
    .table("auctions")
    .where('id', '=', req.params.id)
    .first('*')
    .then((row) => {
      console.log(row)
      res.send(row);
    })
    .catch((err) => {console.log(err)})
});


//create a new auction
router.post("/", function(req, res, next) {
  console.log('reached auction post route')

  //calculate one minute ahead 
  oneHourAhead = Date.now() + 1000 * 60 * 60

  if (JSON.stringify(req.body) !== '{}' && req.body.category && req.body.name && req.body.description && req.body.min_bid && req.body.image) {
      let cat_id = 0;
      knex('categories')
        .where('name', '=', req.body.category)
        .first('*')
        .then((row)=>{
          cat_id = row.id
          console.log(cat_id)
      knex('auctions').insert({
          category_id: cat_id,
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
      }).then().catch()
  } else {
    res.send(err)
  }
})
return router
}
