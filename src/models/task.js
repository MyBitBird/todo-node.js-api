const Joi = require("joi");
const mongoose = require("mongoose");

/*const tasks = [{ id: 1, title: "Task 1", desc: "design api", type: 2 },
{ id: 2, title: "Task 2", desc: "design rect", type: 1 },
{ id: 3, title: "Task 3", desc: "watch videos from Udemy, then larn how to configu mongo db or sqllite and then use it in your project.", type: 1 },
{ id: 4, title: "Task 4", desc: "learn node beginer courses", type: 3 }
];*/

const taskSchema = new mongoose.Schema({
  title: String,
  desc: String,
  type: Number,
});

const Task = mongoose.model("Task", taskSchema);

const addTask = async (task) => {
  const document = new Task({
    title: task.title,
    desc: task.desc,
    type: task.type,
  });
  return await document.save();
};

const getTasks = async () => {
  return await Task.find();
};

const updateTaskType = async (task) => {
    console.log('update' , task);
    
  return await Task.updateOne({_id : task._id}, {
    $set: {
      type: task.type,
    },
  });
};

const removeTask = async id =>
{
    console.log('delete' , id);
    
    return await Task.deleteOne({_id : id});
}

const validate = (task) => {
  const schema = {
    title: Joi.string().min(3).max(50).required(),
    desc: Joi.string().required(),
    type: Joi.number().required(),
  };
  return Joi.validate(task, schema);
};

module.exports = { validate: validate, addTask: addTask, getTasks: getTasks , updateTaskType : updateTaskType  , removeTask : removeTask };
