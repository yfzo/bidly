var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = (knex) => {

  router.get('/:id', function (req, res, next) {
    let data = {}
    knex
      .table("users")
      .where('id', '=', req.params.id)
      .first('*')
      .then((row) => {
        data.first_name = row.first_name;
        data.last_name = row.last_name;
        data.email = row.email;
        data.balance = row.balance;
        data.id = row.id;
        console.log(row)
        knex
          .table("auctions")
          .where('user_id', '=', req.params.id)
          .then((auc_row) => {
            console.log("auctions" + auc_row);
            data.auctions = auc_row;
            console.log(auc_row)
            knex("bids")
              .join("auctions", "bids.auction_id", "auctions.id")
              .where('bids.user_id', '=', req.params.id)
              .then((amount_row) => {
                data.amounts = amount_row;
                knex
                  .table("notifications")
                  .then((notifications) => {
                    data.notifications = notifications;
                    res.send(data);
                  })
              })
          })
      })

    
  });
  return router;
}
