const express = require("express");
const router = express.Router();
const Schedules = require("../models/Schedules");

/* GET home page. */
router.get("/", function(req, res, next) {
  Schedules.query()
    .eager("operators")
    .then(result => res.send(result));
});

router.get("/:id", function(req, res, next) {
  Schedules.query()
    .findById(req.params.id)
    .eager("operators")
    .then(result => res.send(result));
});

router.post("/", function(req, res) {
  Schedules.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", function(req, res) {
  Schedules.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedSchedule => res.json(updatedSchedule));
});

router.delete("/:id", function(req, res) {
  Schedules.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedSchedule => res.json(deletedSchedule));
});

module.exports = router;
