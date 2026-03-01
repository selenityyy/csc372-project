// load the Express module
const express = require('express');
// load handlebars
const { engine } = require('express-handlebars');
const path = require('path');

// create express app
const app = express();

// port num (3000)
const port = 3000;

// set up handlebars and default set to main for the layout
app.engine('handlebars', engine ({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// configure to server static file from my public folder
app.use(express.static(path.join(__dirname, 'public')));

// routes:
app.get('/', (req, res) => res.render('index', { title: 'ASA Website', stylesheet: 'homepage.css' }));
app.get('/about', (req, res) => res.render('about', { title: 'About Page', stylesheet: 'about.css', script: 'about.js' }));
app.get('/asa', (req, res) => res.render('asa', { title: 'ASA', stylesheet: 'asa.css', script: 'asa.js' }));
app.get('/pga', (req, res) => res.render('pga', { title: 'PGA', stylesheet: 'pga.css', script: 'pga.js' }));
app.get('/socials', (req, res) => res.render('socials', { title: 'Socials', stylesheet: 'socials.css', script: 'socials.js' }));

// 404 error handler 
app.use((req, res) => res.status(404).render('error', { title: 'Page Not Found', stylesheet: 'error.css', script: 'error.js' }));

// 500 error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { title: 'Server Error', stylesheet: 'error.css', script: 'error.js' });
});

// start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// so yayy shorter file now than before :)