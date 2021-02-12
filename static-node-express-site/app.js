const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I Love Treehouse!');
});

app.listen(3000);