const express = require('express');
const app = express();
const getRoute = require('./router/routes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', getRoute);

app.listen(9000, 'localhost', ()=> console.log("Server running in 9000"));