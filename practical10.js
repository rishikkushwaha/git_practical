const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    console.log("---- Incoming Request ----");
    console.log("Method:", req.method);
    console.log("URL:", parsedUrl.href);
    console.log("Headers:", req.headers);
    console.log("Query Params:", Object.fromEntries(parsedUrl.searchParams));

    // Respond differently based on method
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Received a GET request');
    } else if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Received a POST request with body: ${body}`);
        });
    } else {
        res.writeHead(405);
        res.end('Method Not Allowed');
    }
});

server.listen(PORT, () => {
    console.log(`Debug server running on port ${PORT}`);
});
