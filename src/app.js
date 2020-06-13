const express = require('express');
const tasks = require('./controllers/tasks.js');
const home = require('./controllers/home.js');
const corsPolicy = require('./middleware/cors')

const app = express();

app.use(express.json());
app.use(corsPolicy);

app.use('/api/tasks/' , tasks);
app.get('/' , home)

const port = process.env.PORT || 8080;
app.listen(port , () => console.log(`server started on ${port}`) );