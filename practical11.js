const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Manual routing using switch-case
    switch(req.url) {
        case '/home':
            res.end('Welcome to Home Page');
            break;
        case '/login':
            res.end('Login Page');
            break;
        case '/data':
            res.end('Data Page');
            break;
        default:
            res.writeHead(404);
            res.end('404 Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Manual routing server running on port ${PORT}`);
});
