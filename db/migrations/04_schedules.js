exports.up = function(knex, Promise) {
  return knex.schema.createTable("schedules", table => {
    table.increments();
    table.string("time").notNullable();
    table.string("daysOff").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("schedules");
};
