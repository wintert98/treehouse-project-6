const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects } = data;

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
   
       // getting an id from params
        const id = req.params.id;
         // and performing a check if the project number is outside of the limits of existing projects
        if (id > projects.length) {
            // and if it is, redirect to error
            //res.redirect('/error');
          } else {
             //otherwise I render project template and handle the data to it
            res.render('project', { projects, id});
          }  
});

module.exports = router;