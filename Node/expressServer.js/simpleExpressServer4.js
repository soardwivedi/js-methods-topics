const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());
app.post('/api/post', (req, res) => {
  const { name } = req.body;

  if (name) {
    return res.status(200).send({ message: `Hello ${name}` });
  }
  return res.status(400).send({ message: 'naeme is required' });
});

app.listen(PORT, (error) => {
  if (error) {
    res.status(500).send({ message: error.message });
  }
  console.log('app is listening on port ' + PORT);
});
