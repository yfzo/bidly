var express = require("express");
var router = express.Router();
const uuid = require("uuid");

module.exports = (knex) => {

    router.post("/", function(req, res, next) {
        //deducting balance    
        knex("users")
        .where('id', '=', req.body.user_id)
        .decrement(
            'balance', req.body.amount
        ).then(()=>{
            //insert bid to table
            knex('bids').insert({
                auction_id : req.body.auction_id,
                user_id: req.body.user_id,
                amount: req.body.amount
            }).then((response) =>{
                res.send(response)
                console.log('bid inserted!', response)
            }).catch((err)=>{
                console.log('bid could not be inserted', err)
            })
        })
        .then((response) => {
            console.log('balance deducted! ', response)
            res.status(200)
        })
        .catch((err) => {
            console.log('balance error: '+ err)
            res.status(404)
        })
    })
    return router
}