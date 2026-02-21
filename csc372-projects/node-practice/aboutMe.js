// needs to load http module
const http = require('http');

// store port number
const port = 3000;

// create server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // write to body of page
    res.end(`
        <html>
            <head>
                <title> About Me </title>
            </head>

            <body>
                <h1> Selena Cabral </h1>
                <p> Description: I am a senior studying Computer Science at URI, and I love dancing, singing, and playing video games. </p>
                <ol>
                    <li> Business Proposal </li>
                    <li> Ginny & Georgia </li>
                    <li> Stranger Things </li>
                </ol>
            </body>
        </html>
    `);
});

// tell server everything has been sent
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})

