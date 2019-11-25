exports.up = function(knex) {
  return knex.schema.createTable("schedules_operators", function(table) {
    table.increments();
    table
      .integer("schedule_id")
      .references("id")
      .inTable("schedules")
      .onDelete("CASCADE");
    table
      .integer("operator_id")
      .references("id")
      .inTable("operators")
      .onDelete("CASCADE");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("schedules_operators");
};
