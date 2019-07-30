var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = (knex) => {

  router.get('/:id', function (req, res, next) {
    let data = {}
    // Find user info
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
        // Find auctions made by that user (and winner's profile)
        knex("auctions")
          .select('auctions.id AS auctions_table_id', "category_id", "name", "description", "min_bid", "end_time", "image", "auctions.user_id as user_id", "notifications_sent", "winner", "first_name", "last_name", "email")
          .from('auctions')
          .leftJoin("users", "winner", "users.id")
          .where('auctions.user_id', '=', req.params.id)
          .then((auc_row) => {
            data.auctions = auc_row;
            // Find the auctions that the user bid on
            knex("bids")
              .select('bids.user_id AS user_id', 'auctions.name AS name', 'bids.amount AS amount', 'winner')
              .join("auctions", "bids.auction_id", "auctions.id")
              .where('bids.user_id', '=', req.params.id)
              .then((amount_row) => {
                data.amounts = amount_row;
                // Find all notifications
                knex
                  .table("notifications")
                  .then((notifications) => {
                    data.notifications = notifications;
                    //send all bids on user's auctions
                    knex
                    .select(knex.raw('amount, COUNT(amount), SUM(amount), auctions.id'))
                    .from('bids')
                    .join("auctions", "auctions.id", "bids.auction_id")
                    .where('auctions.user_id', '=', req.params.id)
                    .groupBy('amount', 'auctions.id' )
                    .orderBy(['count', 'amount'])
                    .then((auc_row) => {
                      data.auction_bids = auc_row;

                      //sum of each auction
                      knex
                      .select(knex.raw('SUM(amount), auctions.id'))
                      .from('bids')
                      .join("auctions", "auctions.id", "bids.auction_id")
                      .where('auctions.user_id', '=', req.params.id)
                      .groupBy('auctions.id' )
                      // .orderBy(['count', 'amount'])
                      .then((auc_row) => {
                        data.auctions_total = auc_row; 
                        res.send(data)
                      })
                    })
            })
          })
      })
  })


});
return router;
}
