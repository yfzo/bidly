var express = require("express");
var router = express.Router();

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
    .where('password', '=', req.body.password)
    .first('*')
    .then((user) => {
      res.cookie('user_id', user.id)
      res.send({userid: user.id})
    })
    .catch(error => {
      console.log(error)
      res.send(error)
    })
  })

return router
}