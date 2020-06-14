const express = require('express');
const tasks = require("../controllers/tasks.js");
const home = require("../controllers/home.js");
const corsPolicy = require("../middleware/cors");

module.exports = (app) => {
    app.use(express.json());
    app.use(corsPolicy);

    app.use("/api/tasks/", tasks);
    app.get("/", home);

}