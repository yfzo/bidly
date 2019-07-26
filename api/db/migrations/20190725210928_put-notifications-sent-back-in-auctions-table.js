
exports.up = function(knex, Promise) {
    return knex.schema.table('auctions', function(t) {
        t.boolean('notifications_sent').notNull().defaultTo(false);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('auctions', function(t) {
        t.dropColumn('notifications_sent');
    });
};