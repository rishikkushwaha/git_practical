const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if(req.url === '/') {
        res.end('Welcome to Home Page');
    } else if(req.url === '/about') {
        res.end('This is About Page');
    } else {
        res.end('404 Page Not Found');
    }
});

// Listen on port 8080
server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
