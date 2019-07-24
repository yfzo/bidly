var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = (knex) => {

  router.get('/:id', function(req, res, next) {
    knex
      .table("users")
      .where('id', '=', req.params.id)
      .first('*')
      .then((row) => {
        console.log(row)
        res.send(row);
      })
  });
  return router
}
