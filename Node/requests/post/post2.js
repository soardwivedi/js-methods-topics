const express = require('express');
const app = express();

app.use(express);
app.use(express.json());

const PORT = 3007;

app.post('/user', (req, res) => {
  console.log('Hello');
  if (req.body == name) {
    res.status(200).send({ message: `Hello ${req.body.name}` });
  }
  res.status(404).send({ message: 'User not found' });
});

app.listen(PORT, () => {
  `Server listening on ${PORT}`;
});
