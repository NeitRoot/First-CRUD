const { json } = require("express");
const express = require("express");
const userSchema = require("../models/userModel");

const router = express.Router();

//Create User
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ menssage: error }));
});

//Get all Users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ menssage: error }));
});

//Get One User
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ menssage: error }));
});

//Update a User
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, email, password } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ menssage: error }));
});

//Delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ menssage: error }));
});

module.exports = router;
