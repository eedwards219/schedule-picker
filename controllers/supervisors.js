const knex = require("../db/knex");

exports.getAllSupervisors = function(req, res) {
  knex("supervisors").then(supervisor => res.json(supervisor));
};

exports.getOneSupervisor = function(req, res) {
  knex("operators")
    .where("id", req.params.id)
    .then(supervisor => res.json(supervisor));
};

exports.addOneSupervisor = function(req, res) {
  knex("operators")
    .insert(req.body)
    .returning("*")
    .then(newSupervisor => res.json(newSupervisor));
};

exports.updateOneSupervisor = function(req, res) {
  knex("operators")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedSupervisor => res.json(updatedSupervisor));
};

exports.removeOneSupervisor = function(req, res) {
  knex("operators")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newSupervisor => res.json(newSupervisor));
};
