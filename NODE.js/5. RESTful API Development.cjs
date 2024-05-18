// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Sample data (replace with database implementation)
let users = [];

app.use(bodyParser.json());

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET a specific user by ID
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(user => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// POST a new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update an existing user
app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[userIndex] = { ...users[userIndex], name, email };
  res.json(users[userIndex]);
});

// DELETE a user
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
