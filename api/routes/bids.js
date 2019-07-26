var express = require("express");
var router = express.Router();
const uuid = require("uuid");

module.exports = (knex) => {

    router.post("/", function(req, res, next) {
        console.log('reached post bids route')
        // if (JSON.stringify(req) !== '{}' && req.body.auction_id && req.body.user_id && req.body.amount) {
            // console.log('passed here')
            // knex("users")
            //     .where('id', '=', req.body.user_id)
            //     .first('*')
            //     .then((row) => {
            //         console.log('row one ' + row.balance)
            //         console.log('amount' + req.body.amount)
            //         console.log((row.balance - req.body.amount) <= 0)
            //         if((row.balance - req.body.amount) <= 0){
            //             throw 'your balance is not enough!'
            //         }
            //     }).catch((err) => {
            //         res.send(err)
            //     })

                // console.log('inserting bid')
                // knex('bids').insert({
                //     auction_id : req.body.auction_id,
                //     user_id: req.body.user_id,
                //     amount: req.body.amount
                // })
                // .then((response)=>{
                //     res.send(response)
                // }).catch((err) => {
                //     res.send(err)
                // })
                console.log('deducting use balance')
                knex("users")
                .where('id', '=', req.body.user_id)
                .decrement(
                    'balance', req.body.amount
                )
                .then((response) => {
                    console.log('first one: ' + response)
                    res.send('okay')
                })
                .catch((err) => {
                    console.log('error on backend: '+ err)
                    res.send(err)
                })
            // }
    })
    return router
}