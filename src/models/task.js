const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  desc: String,
  type: {type : Number, required : true}
});

const Task = mongoose.model("Task", taskSchema);

const validate = (task) => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    desc: Joi.string().required(),
    type: Joi.number().required(),
  });
  return schema.validate(task);
};

module.exports = { Task: Task ,validate: validate};
