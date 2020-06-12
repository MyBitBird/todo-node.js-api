const Joi = require('joi')

const tasks = [{ id: 1, title: "Task 1", desc: "design api", status: 2 },
{ id: 2, title: "Task 2", desc: "design rect", status: 1 },
{ id: 3, title: "Task 3", desc: "design db", status: 1 },
{ id: 4, title: "Task 4", desc: "learn node beginer courses", status: 3 }
];

const validate = (task) =>
{
    const schema = {
        title: Joi.string().min(3).max(50).required(),
        desc: Joi.string().required(),
        status: Joi.number().required()
    }
    return Joi.validate(task,schema);
}

module.exports = {tasks : tasks , validate : validate}


