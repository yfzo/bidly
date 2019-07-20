exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('auctions', function(table){
    table.increments('id').primary();
    table.string('category_id').references('categories');
    table.string('name');
    table.string('description');
    table.integer('min_bid');
    table.datetime('start_time');
    table.datetime('end_time');
    table.string('image');
    table.string('user_id').references('users');      
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('auctions')
  ])
};