const { Task } = require("../models/task");

const add = async (task) => {
  const document = new Task({
    title: task.title,
    desc: task.desc,
    type: task.type,
  });
  return await document.save();
};

const get = async () => {
  return await Task.find();
};

const update = async (task) => {
  return await Task.updateOne(
    { _id: task._id },
    {
      $set: {
        type: task.type,
      },
    }
  );
};

const remove = async (id) => {
  return await Task.deleteOne({ _id: id });
};

module.exports = { add: add, get: get, remove: remove, update: update };
