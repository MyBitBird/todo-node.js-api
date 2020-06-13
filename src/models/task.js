const Joi = require('joi')

const tasks = [{ id: 1, title: "Task 1", desc: "design api", type: 2 },
{ id: 2, title: "Task 2", desc: "design rect", type: 1 },
{ id: 3, title: "Task 3", desc: "watch videos from Udemy, then larn how to configu mongo db or sqllite and then use it in your project.", type: 1 },
{ id: 4, title: "Task 4", desc: "learn node beginer courses", type: 3 }
];

const validate = (task) =>
{
    const schema = {
        title: Joi.string().min(3).max(50).required(),
        desc: Joi.string().required(),
        type: Joi.number().required()
    }
    return Joi.validate(task,schema);
}

module.exports = {tasks : tasks , validate : validate}


