
exports.up = function(knex, Promise) {
    return knex.schema.table('notifications', function(t) {
        t.renameColumn('type', 'message');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('notifications', function(t) {
        t.renameColumn('message', 'type');
    });
};
