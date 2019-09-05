exports.up = function(knex, Promise) {
    return knex.raw('alter TABLE bids ALTER COLUMN user_id TYPE varchar');
};

exports.down = function(knex, Promise) {
  return knex.schema.table('bids', function(t) {
    table.integer('user_id').references('users');
  });
};

