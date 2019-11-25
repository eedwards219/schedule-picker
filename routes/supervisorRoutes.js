const express = require("express");
const router = express.Router();
const Supervisors = require("../models/Supervisors");

/* GET home page. */
router.get("/", function(req, res, next) {
  Supervisors.query()
    .eager("operators")
    .then(result => res.send(result));
});

router.get("/:id", function(req, res, next) {
  Supervisors.query()
    .findById(req.params.id)
    .eager("operators")
    .then(result => res.send(result));
});

router.post("/", function(req, res) {
  Supervisors.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", function(req, res) {
  Supervisors.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedSupervisor => res.json(updatedSupervisor));
});

router.delete("/:id", function(req, res) {
  Supervisors.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedSupervisor => res.json(deletedSupervisor));
});

module.exports = router;
