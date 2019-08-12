var express = require("express");
var router = express.Router();
var uuidv4 = require('uuid/v4');
var Helper = require('../Helper.js');

module.exports = (knex) => {

router.get("/", function(req, res, next) {
    res.send("register get routes here");
});

router.post("/", function(req, res, next) {
  console.log('reached registration post route')

  if (JSON.stringify(req.body) !== '{}' && req.body.email && req.body.first_name && req.body.last_name && req.body.password) {
      knex('users').insert({
          // id: uuidv4(),
          id: 5,
          email: req.body.email,
          password: Helper.hashPassword(req.body.password),
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          balance: 0
      }).then((response) => {
          console.log('user created')
          res.send(response)
      }).catch((err) => {
          res.send(err)
          console.log(err)
        })
  } else {
    res.send(err)
  }
})

return router
}
