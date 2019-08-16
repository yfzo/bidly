var express = require("express");
var router = express.Router();
var Helper = require('../Helper.js');

module.exports = (knex) => {

router.get("/", function(req, res, next) {
    res.send("login get routes here");
});

  //select data where email and password match and attach userid on cookie
  //if not, send back an error
router.post("/", function(req, res, next) {
  console.log('post login route')
  knex
    .table("users")
    .where('email', '=', req.body.email)
    .first('*')
    .then((user) => {
      if (!Helper.comparePassword(user.password, req.body.password)) {
        return res.status(400).send({'message': 'The credentials you provided are incorrect'});
      } else {
        const token = Helper.generateToken(user.id);
        res.cookie('user_id', token)
        res.send({userid: token})
      }
    })
    .catch(error => {
      console.log(error)
      res.send(error)
    })
  })

return router
}