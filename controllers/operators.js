const knex = require("../db/knex");

exports.getAllOperators = function(req, res) {
  knex("operators").then(operator => res.json(operator));
};

exports.getOneOperator = function(req, res) {
  knex("operators")
    .where("id", req.params.id)
    .then(operator => res.json(operator));
};

exports.addOneOperator = function(req, res) {
  knex("operators")
    .insert(req.body)
    .returning("*")
    .then(newOperator => res.json(newOperator));
};

exports.updateOneOperator = function(req, res) {
  knex("operators")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedOperator => res.json(updatedOperator));
};

exports.removeOneOperator = function(req, res) {
  knex("operators")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newOperator => res.json(newOperator));
};
