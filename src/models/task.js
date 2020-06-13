const Joi = require("joi");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  desc: String,
  type: {type : Number, required : true}
});

const Task = mongoose.model("Task", taskSchema);

const validate = (task) => {
  const schema = {
    title: Joi.string().min(3).max(50).required(),
    desc: Joi.string().required(),
    type: Joi.number().required(),
  };
  return Joi.validate(task, schema);
};

module.exports = { Task: Task ,validate: validate};
