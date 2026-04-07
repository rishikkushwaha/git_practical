const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5002; // Safe port to avoid conflicts

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading page');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`HTML server running on port ${PORT}`);
});
