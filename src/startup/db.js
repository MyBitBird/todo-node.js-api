const mongoose = require("mongoose");
const config = require("config");

module.exports = () => {
  const mongoUrl = config.get("mongoUrl");
  console.log('mongo' , mongoUrl);
  mongoose
    .connect(mongoUrl, { useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => console.log(`Connected To ${mongoUrl}..`))
    .catch((err) => console.log("Connecting to Database failed.. ", err));
};
