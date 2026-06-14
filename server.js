const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.json': 'application/json'
};

const server = http.createServer((req, res) => {
  // Decode URL to handle spaces/special characters
  const decodedUrl = decodeURIComponent(req.url);
  
  // Resolve path
  let filePath = path.join(__dirname, decodedUrl === '/' ? 'index.html' : decodedUrl);
  
  // If no extension, check if it's a directory or if we can append .html
  if (!path.extname(filePath)) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else {
      filePath += '.html';
    }
  }

  // Helper to serve 404
  const serve404 = () => {
    fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(data || '<h1>404 Not Found</h1>');
    });
  };

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      serve404();
      return;
    }

    // Read and serve file
    fs.readFile(filePath, (readErr, data) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`\x1b[32m[Server] Running locally at http://localhost:${PORT}/\x1b[0m`);
  console.log(`\x1b[36m[Server] Handles clean URLs and serves 404.html automatically on missing files.\x1b[0m`);
});
