exports.up = function(knex, Promise) {
  return knex.schema.createTable("operators", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("aNumber").notNullable();
    table.string("supervisor").notNullable();
    table.string("schedule").notNullable();
    table.string("role").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("operators");
};
