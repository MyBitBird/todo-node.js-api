const express = require("express");
const tasks = require('../models/task')
const router = express.Router();
router.get("/", async (req, res) => {
  res.send(
    tasks
  );
});

module.exports = router;
