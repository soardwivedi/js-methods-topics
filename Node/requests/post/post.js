const express = require('express');
const app = express();
app.use(express);
app.use(express.json());
const PORT = 3007;

app.post('/api/greet', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ message: `Hello ${name}` });
  } else {
    res.status(404).json({ message: 'Please Provide user name' });
  }
});

app.listen(PORT, () => {
  console.log('Server is runnunig on port ' + PORT);
});
