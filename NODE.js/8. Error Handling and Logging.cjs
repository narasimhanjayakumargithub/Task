// app.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Custom error handling middleware
app.use((err, req, res, next) => {
  // Log the error to console
  console.error(err.stack);

  // Log the error to a file
  fs.appendFile('error.log', `${new Date().toLocaleString()} - ${err.stack}\n`, (error) => {
    if (error) {
      console.error('Error logging to file:', error);
    }
  });

  // Send error response to the client
  res.status(500).json({ message: 'Internal server error' });
});

// Example route that throws an error
app.get('/error', (req, res, next) => {
  // Simulate an error
  next(new Error('Oops! Something went wrong.'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
