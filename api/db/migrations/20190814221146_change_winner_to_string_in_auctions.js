
exports.up = function(knex, Promise) {
    return knex.raw('alter TABLE auctions ALTER COLUMN winner TYPE varchar');
};

exports.down = function(knex, Promise) {
    return knex.raw('alter TABLE auctions ALTER COLUMN winner TYPE integer');
};