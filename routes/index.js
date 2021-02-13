const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects } = data;

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    res.render('project', {
        id: projects[id].id,
        project_name: projects[id].project_name,
        description: projects[id].description,
        technologies: projects[id].technologies,
        live_link: projects[id].live_link,
        github_link: projects[id].github_link,
        image_urls: projects[id].image_urls

    });
});

module.exports = router;