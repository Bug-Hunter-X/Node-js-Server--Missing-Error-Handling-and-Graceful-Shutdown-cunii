const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});

//Uncommon bug:  Improper error handling and resource cleanup.
//The server lacks proper error handling.  If there's an issue such as a network problem, the error isn't explicitly handled, potentially leading to unexpected behavior or crashes.
//Additionally, there is no mechanism for graceful shutdown, meaning that if the server needs to terminate it could leave resources hanging (open sockets, etc).
