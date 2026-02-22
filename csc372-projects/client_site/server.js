// load http module
const http = require('http');
// load fs module
const fs = require('fs');
const path = require('path');
const port = 3000;

// function called serverStaticFile
function serverStaticFile(res, filePath, contentType, statusCode = 200) {
    // read file at given path
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading ' + filePath);
        } else {
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

// had to use AI to help 
function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case '.html': return 'text/html';
        case '.css':  return 'text/css';
        case '.js':   return 'text/javascript';
        case '.png':  return 'image/png';
        case '.jpg':
        case '.jpeg': return 'image/jpeg';
        case '.gif':  return 'image/gif';
        case '.svg':  return 'image/svg+xml';
        default:      return 'application/octet-stream';
    }
}

// create a server
const server = http.createServer((req, res) => {
    // remove query strings and convert to lowercase
    // using toLowerCase() to avoid case sensitivity and it's easier to use this directly
    let urlPath = req.url.replace(/\/?(?:\?.*)?$/, '');

    console.log('Requested:', req.url); 
    console.log('Processed path:', urlPath); 

    // defaults to index.html
    if (urlPath === '' || urlPath === '/') {
        urlPath = '/index.html';
    }

    const filePath = './public' + urlPath;

    // got help writing lines 52-60 because I was having issues with things not loading, so had to change my code to this
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            serverStaticFile(res, './public/error.html', 'text/html', 404);
        } else {
            serverStaticFile(res, filePath, getContentType(filePath));
        }
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});

