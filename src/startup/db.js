const mongoose = require("mongoose");
const config = require('config');

module.exports = () => {
    const db = config.get('db');
  mongoose
    .connect(db,{useNewUrlParser: true})
    .then(() => console.log(`Connected To ${db}..`))
    .catch((err) => console.log("Connecting to Database failed..", err));
};
