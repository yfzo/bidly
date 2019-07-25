exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema
      .dropTable('notifications')
      .createTable('notifications', function(table){
      table.increments('id').primary();
      table.integer('auction_id').references('auctions');
      table.string('type')
      })
    ])
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema
        .dropTable('notifications')
        .createTable('notifications', function(table){
            table.increments('id').primary();
            table.string('auction_id').references('auctions');
            table.string('type')
            })
    ])
  };