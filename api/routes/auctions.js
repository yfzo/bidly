var express = require("express");
var router = express.Router();

module.exports = (knex) => {

  //send all categories(for side bar) and auctions data
router.get("/", function(req, res, next) {
  console.log('reached auctions get route')
  sendingData = []
  knex
    .select("*")
    .from("auctions")
    .then((auc_row) => {
      knex
        .select("*")
        .from("categories")
        .then((cat_row) => {
        console.log({cateogry: cat_row, auctions: auc_row})
        res.send({cateogry: cat_row, auctions: auc_row});
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

    let newAuction = {
      category_id: req.body.category,
      name: req.body.name,
      description: req.body.description,
      min_bid: req.body.min_bid,
      start_time: "",
      end_time: req.body.end_time,
      image: req.body.image,
      user_id: req.body.user_id
    };

    let valid = newAuction.name && 
      (newAuction.description !== undefined) &&
      newAuction.min_bid &&
      newAuction.end_time &&
      newAuction.image &&
      newAuction.user_id;
  //find category id from category name from knex?
  //find start time from somewhere in req.body? or automatically create by created_at?
  //where can I find user_id?
  if(valid){
  knex('auctions').insert({
    'category_id': newAuction.category,
    'name': newAuction.name,
    'description': newAuction.description,
    'min_bid': newAuction.min_bid,
    'start_time': "",
    'end_time': newAuction.end_time,
    'image': newAuction.image,
    'user_id': newAuction.user_id
  })
  .then( function (result) {
    res.json({ success: true, message: 'ok' });     // respond back to request
  })
  }
}});

return router
}