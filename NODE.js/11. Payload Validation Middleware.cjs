// app.js
const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Custom middleware to validate request payload
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to handle POST requests with validation middleware
app.post('/api/data', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
], validateRequest, (req, res) => {
  // If the request payload is valid, proceed with handling the request
  const { name, email } = req.body;
  res.json({ message: 'Data received successfully', name, email });
});

// Error handling middleware for validation errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: 'Invalid JSON payload' });
  }
  next();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
