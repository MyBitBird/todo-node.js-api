const express = require("express");
const { getTasks, addTask, updateTaskType , removeTask , validate: validateTask  } = require("../models/task");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(await getTasks());
});

router.post("/", async (req, res) => {
  const { error } = validateTask(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  let newTask = {
    title: req.body.title,
    desc: req.body.desc,
    type: req.body.type,
  };
  newTask= await addTask(newTask);
  res.status(200).send(newTask);
});

router.delete("/:id", async (req, res) => {
  const result = await removeTask(req.params.id);
  if(result.n == 0) return res.status(404).send();
  res.status(200).send();
});

router.patch("/:id" , async (req , res) =>
{
  const task = {
    _id: req.params.id,
    type: req.body.type,
  };
  const result = await updateTaskType(task)
  if(result.n == 0) return res.status(404).send();
  res.status(200).send();
})

module.exports = router;
