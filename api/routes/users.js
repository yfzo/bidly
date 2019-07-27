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
        // Find auctions made by that user
        knex("auctions")
          .select('*')
          .from('auctions')
          .leftJoin("users", "winner", "users.id")
          .where('user_id', '=', req.params.id)
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
                    res.send(data);
                    // Find winners of auctions this user made
                    // knex("auctions")
                    // .join("users", "winner", "user_id")
                    // .where("auctions.id", "=", req.params.id)
                    // .then((winners) => {
                    //   // data.winners = winners;
                    //   for(auction of auc_row) {
                    //     auction.winner_info = 
                    //   }
                    //   })
                  })
              })

      })
  })


});
return router;
}
