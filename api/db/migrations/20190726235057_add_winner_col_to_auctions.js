
exports.up = function(knex, Promise) {
    return knex.schema.table('auctions', function(t) {
        t.integer('winner');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('auctions', function(t) {
        t.dropColumn('winner');
    });
};