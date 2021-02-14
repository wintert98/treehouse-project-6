const { response } = require('express');
const express = require('express');
const app = express();
app.use('/static', express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');
// Link to routes file
const routes = require('./routes/index');
app.use(routes);
// 404 error handler
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    console.log(`${err.message} - ${err.status}`);
    next(err);
});

// 500 error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    const message = err.message = 'Server Error, Page Not Found, try again'
    res.status(status);
    console.log(`${err.message} - ${err.status}`);
    res.render('error');
    next();
});


app.listen(3000);