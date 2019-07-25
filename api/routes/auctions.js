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
        // console.log({category: cat_row, auctions: auc_row})
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

// router.post('/image-upload', (req, res) => {
//   console.log('reached image upload route')
//   const path = Object.values(Object.values(req.files)[0])[0].path
//   cloudinary.uploader.upload(path)
//     .then(image => res.json([image]))
// })


//create a new auction
router.post("/", function(req, res, next) {
  //calculate one minute ahead 
  var currentTime = new Date();
  var minutes = 1;
  var futureTime = currentTime.getTime() + (minutes * 60000)
  var endTime = new Date(futureTime)

  if (JSON.stringify(req.body) !== '{}') {
    console.log('reached post route for new auction')
    console.log(req.body)
      knex('auctions').insert({
          category_id: req.body.category,
          name: req.body.name,
          description: req.body.description,
          min_bid: req.body.min_bid,
          end_time: endTime,
          image: req.body.image,
          user_id: req.body.user_id
      }).then(() => {
          console.log('auction posted')
      }).catch((err) => {
          console.log(err)      
    })
  }
})
return router
}
