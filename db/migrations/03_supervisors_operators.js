exports.up = function(knex) {
  return knex.schema.createTable("supervisors_operators", function(table) {
    table.increments();
    table
      .integer("supervisor_id")
      .references("id")
      .inTable("supervisors")
      .onDelete("CASCADE");
    table
      .integer("operator_id")
      .references("id")
      .inTable("operators")
      .onDelete("CASCADE");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("supervisors_operators");
};
