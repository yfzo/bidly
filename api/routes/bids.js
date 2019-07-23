var express = require("express");
var router = express.Router();

module.exports = (knex) => {

router.post("/", function(req, res, next) {
    console.log('reached post route')
    console.log(req.body)
    if (JSON.stringify(req.body) !== '{}' && req.body.auction_id && req.body.user_id && req.body.amount) {
        knex('bids').insert({
            id: 1, //for now
            auction_id : req.body.auction_id,
            user_id: req.body.user_id,
            amount: req.body.amount
        }).then(() => {
            console.log('bid posted')
        }).catch((err) => {
            console.log(err)
        })
    }
});

return router
}