exports.up = function(knex, Promise) {
    return knex.raw('alter TABLE auctions ALTER COLUMN user_id TYPE varchar');
};

exports.down = function(knex, Promise) {
  return knex.schema.table('auctions', function(t) {
    table.integer('user_id').references('users');
  });
};

