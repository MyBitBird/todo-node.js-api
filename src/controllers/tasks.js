const express = require("express");
const { validate} = require("../models/task");
const {add , update , remove , get}  = require('../services/task')
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await get());
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let newTask = {
    title: req.body.title,
    desc: req.body.desc,
    type: req.body.type,
  };
  
  newTask = await add(newTask);
  res.status(200).send(newTask);
});

router.delete("/:id", async (req, res) => {
  const result = await remove(req.params.id);
  if (result.n == 0) return res.status(404).send();
  res.status(200).send();
});

router.patch("/:id", async (req, res) => {
  const task = {
    _id: req.params.id,
    type: req.body.type,
  };
  const result = await update(task);
  if (result.n == 0) return res.status(404).send();
  res.status(200).send();
});

module.exports = router;
