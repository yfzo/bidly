exports.up = function(knex, Promise) {
    return knex.raw('alter TABLE users ALTER COLUMN id TYPE varchar');
};

exports.down = function(knex, Promise) {
  return knex.schema.table('auctions', function(t) {
    t.increments('id').primary().alter();
  });
};
