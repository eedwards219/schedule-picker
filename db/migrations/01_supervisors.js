exports.up = function(knex, Promise) {
  return knex.schema.createTable("supervisors", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("serialNumber").notNullable();
    table.string("hireDate").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("supervisors");
};
