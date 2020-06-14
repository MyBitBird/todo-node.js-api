const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost/todo")
    .then(() => console.log("Connected To Database.."))
    .catch((err) => console.log("Connecting to Database failed..", err));
};
