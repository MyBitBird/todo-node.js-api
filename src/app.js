const express = require('express');
const tasks = require('./controllers/tasks.js');

const app = express();
app.use(express.json());
app.use('/api/tasks/' , tasks)
app.get('/' , (req , res) => res.send('Hellow'))
app.on('connection' , ()=>console.log('connection')
)
const port = process.env.PORT || 8080;
app.listen(port , () => console.log(`server started on ${port}`) );