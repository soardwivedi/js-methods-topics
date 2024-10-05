const express = require('express');
app.use(express);
app.use(express.json());
const PORT = 3000;

app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ message: `Hello ${name}` });
  } else {
    res.status(404).json({ message: 'Please Provide user name' });
  }
});

app.liten(PORT, () => {
  console.log('Server is runnunig on port ' + PORT);
});
