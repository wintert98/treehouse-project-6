const { response } = require('express');
const express = require('express');
const app = express();
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const routes = require('./routes/index');
app.use(routes);


app.listen(3000);