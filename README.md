# Node.js Server: Missing Error Handling and Graceful Shutdown

This repository demonstrates a common but easily overlooked issue in Node.js server development: the lack of proper error handling and a graceful shutdown mechanism.  The `bug.js` file shows a simple HTTP server that's vulnerable to unexpected crashes and resource leaks. The `bugSolution.js` file provides a corrected version with improved error handling and a graceful shutdown method.

## Bug

The original server lacks error handling for situations such as network problems or unexpected errors during request processing.  If an error occurs, the server might crash without providing any useful information.  Additionally, the absence of a graceful shutdown mechanism could lead to resources being left open when the server terminates, which is especially important for production applications.

## Solution

The solution incorporates the following improvements:

1. **Error Handling:**  The `server.on('error', ...)` event listener catches and handles errors gracefully, logging them and potentially taking corrective actions.
2. **Graceful Shutdown:**  The `process.on('SIGINT', ...)` and `process.on('SIGTERM', ...)` listeners handle termination signals (like Ctrl+C) allowing the server to close cleanly, preventing resource leaks and ensuring ongoing requests are handled before shutting down.

This example highlights the importance of robust error handling and graceful shutdown in production-ready Node.js applications.