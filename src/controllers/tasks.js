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
    id: tasks.length + 1,
    title: req.body.title,
    desc: req.body.desc,
    type: req.body.type,
  };
  tasks.push(newTask);
  res.status(200).send(newTask);
});

router.delete("/:id", async (req, res) => {
  const task = tasks.find((x) => x.id == req.params.id);
  if (!task) return res.status(404).send();
  tasks.splice(
    tasks.findIndex((x) => x == task),
    1
  );
  res.status(200).send();
});

router.patch("/:id" , async (req , res) =>
{
  const task = tasks.find((x) => x.id == req.params.id);
  
  if (!task) return res.status(404).send();
  const newTask = {
    id: task.id,
    title: task.title,
    desc: task.desc,
    type: req.body.type,
  };

  tasks.splice(
    tasks.findIndex((x) => x == task),
    1
    , 
    newTask
  );
  res.status(200).send();

})

module.exports = router;
