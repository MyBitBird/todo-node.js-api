const express = require("express");
const { tasks, validate: validateTask } = require("../models/task");
const router = express.Router();
router.get("/", async (req, res) => {
  res.send(tasks);
});

router.post("/", async (req, res) => {
  const { error } = validateTask(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  const newTask = {
    id: tasks.length+1,
    title: req.body.title,
    desc: req.body.desc,
    status: req.body.status,
  };
  tasks.push(newTask);
  res.status(200).send(newTask);
});

module.exports = router;
