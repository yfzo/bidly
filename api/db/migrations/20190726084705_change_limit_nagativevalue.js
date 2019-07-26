
exports.up = function(knex, Promise) {
 //set balance to not to be negative value
 return Promise.all([
  knex.schema.raw(`ALTER TABLE users ADD CONSTRAINT balance_non_negative CHECK (balance >= 0)`)
])
};

exports.down = function(knex, Promise) {
 return knex.schema.table('users', function(table) {
  table.dropColumn('balance');
});
};
