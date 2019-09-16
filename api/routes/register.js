var express = require("express");
var router = express.Router();

module.exports = knex => {
  router.get("/", function(req, res, next) {
    res.send("register get routes here");
  });

  router.post("/", function(req, res, next) {
    console.log("post register route", req.body);
    knex("users")
      .insert({
        first_name: JSON.stringify(req.body.fName),
        last_name: JSON.stringify(req.body.lName),
        email: JSON.stringify(req.body.email),
        password: JSON.stringify(req.body.password),
        balance: 300
      })
      .returning("*")
      .then(response => {
        console.log(response[0]);
        knex("users")
          .where("email", "=", response[0].email)
          .first("*")
          .then(user => {
            res.cookie("user_id", user.id);
            console.log("user found!");
            res.json({ user_id: user.id });
          });
      })
      .catch(err => {
        res.send(err);
        console.log(err);
      });
  });
  return router;
};
