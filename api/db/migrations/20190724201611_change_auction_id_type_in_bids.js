
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema
        .dropTable("bids")
        .createTable('bids', function(table){
        table.increments('id').primary();
        table.integer('auction_id').references('auctions');
        table.string('user_id').references('users');
        table.integer('amount')
        })
      ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema
        .dropTable("bids")
        .createTable('bids', function(table){
        table.increments('id').primary();
        table.string('auction_id').references('auctions');
        table.string('user_id').references('users');
        table.integer('amount')
        })
      ])
};
