const express = require("express");
const router = express.Router();
const Operators = require("../models/Operators");

/* GET home page. */
router.get("/", function(req, res, next) {
  Operators.query()
    .eager("supervisors")
    .then(result => res.send(result));
});

router.get("/:id", function(req, res, next) {
  Operators.query()
    .findById(req.params.id)
    .eager("supervisors")
    .then(result => res.send(result));
});

router.post("/", function(req, res) {
  console.log("req.body", req.body);
  Operators.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", function(req, res) {
  Operators.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedOperator => res.json(updatedOperator));
});

router.delete("/:id", function(req, res) {
  Operators.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedOperator => res.json(deletedOperator));
});

module.exports = router;
