exports.up = function(knex, Promise) {
  return knex.schema.createTable("schedules", table => {
    table.increments();
    table.string("daysOff").notNullable();
    table.string("fromHours").notNullable();
    table.string("fromMinutes").notNullable();
    table.string("untilHours").notNullable();
    table.string("untilMinutes").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("schedules");
};
