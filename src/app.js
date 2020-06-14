const express = require("express");
const app = express();
require('./startup/routes')(app);
require('./startup/db')();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server started on ${port}`));
