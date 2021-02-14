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
   
       // variable for getting id from params
        const id = parseInt(req.params.id);
            // rendering data to projects
            res.render('project', { 
                id: id,
                project_name: data.projects[id].project_name,
                description: data.projects[id].description,
                technologies: data.projects[id].technologies,
                live_link: data.projects[id].live_link,
                github_link: data.projects[id].github_link,
                img1: data.projects[id].image_urls[0],
                img2: data.projects[id].image_urls[1],
                img3: data.projects[id].image_urls[2]
        

            });
            
        
          
});

module.exports = router;