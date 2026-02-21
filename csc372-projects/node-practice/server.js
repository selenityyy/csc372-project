// load http module
const http = require('http');

// create index
function index(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2> Hello World! </h2>');
}

// create about
function about(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2> About me... </h2>');
}

// create contact
function contact(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2> Contact us! </h2>');
}   

// if not found, respond with 404
function notFound(req, res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2> 404 Not Found </h2>');
}

const routes = {
    '/': index,
    '/about': about,
    '/contact': contact
};

// create server
const server = http.createServer((req, res) => {
   const url = req.url;
   const route = routes[url] || notFound;
   route(req, res);
});


// store port number
const port = 3000;

// start server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});