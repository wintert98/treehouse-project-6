const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects } = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project', (req, res) => {
    res.render('project');
});

module.exports = router;