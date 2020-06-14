const express = require("express");
const tasks = require("./controllers/tasks.js");
const home = require("./controllers/home.js");
const mongoose = require("mongoose");
const corsPolicy = require("./middleware/cors");


const app = express();

app.use(express.json());
app.use(corsPolicy);

app.use("/api/tasks/", tasks);
app.get("/", home);

mongoose
  .connect("mongodb://localhost/todo")
  .then(() => console.log("Connected To Database.."))
  .catch((err) => console.log("Connecting to Database failed..", err));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server started on ${port}`));
