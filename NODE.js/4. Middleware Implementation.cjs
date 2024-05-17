// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to log request details
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  next();
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET route
app.get('/api/data', (req, res) => {
  res.json({ message: 'GET request received' });
});

// POST route
app.post('/api/data', (req, res) => {
  const { data } = req.body;
  res.json({ message: `POST request received with data: ${data}` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
