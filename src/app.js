const express = require("express");
const helmet = require("helmet");
const app = express();
require('./startup/routes')(app);
require('./startup/db')();

app.use(helmet());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server started on ${port}`));
