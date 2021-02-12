const { response } = require('express');
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project', (req, res) => {
    res.render('project');
});



app.listen(3000);