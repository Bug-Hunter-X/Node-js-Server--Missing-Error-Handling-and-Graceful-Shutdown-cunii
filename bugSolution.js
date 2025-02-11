const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

// Error Handling

server.on('error', (err) => {
  console.error('Server error:', err);
  // Consider more robust error handling based on the error type.
});

// Graceful Shutdown

const shutdown = () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});