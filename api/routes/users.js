var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = (knex) => {

  router.get('/:id', function(req, res, next) {
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
        .first('*')
        .then((auc_row) => {
          data.name = auc_row.name;
          data.auc_id = auc_row.id;
          console.log(auc_row)
        knex
        .table("bids")
        .where('auction_id', '=', req.params.id)
        .first('*')
        .then((amount_row) => {
          data.amount = amount_row.amount;
        res.send(data);
       })
      })
    })
  });
  return router
}
