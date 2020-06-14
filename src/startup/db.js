const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  const mongoUrl = config.get("mongoUrl");
  mongoose
    .connect(mongoUrl, { useNewUrlParser: true })
    .then(() => console.log(`Connected To ${mongoUrl}..`))
    .catch((err) => console.log("Connecting to Database failed.. ", err));
};
