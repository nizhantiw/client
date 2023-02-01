const express = require('express')();
// const app = express();
const port = 5000;


const users = [
  { id:1, name: 'User1', email: 'user1@example.com', phone: '098-217-3256' },
  { id:2, name: 'user2', email: 'user2@example.com', phone: '098-765-4321' },
  { id:3, name: 'user3', email: 'user3@example.com', phone: '098-765-4321' },
];

express.get('/api', (req, res) => {
  res.json(users);
});

express.listen(
    port, 
    () => console.log(`User API listening at http://localhost:${port}`)
)
