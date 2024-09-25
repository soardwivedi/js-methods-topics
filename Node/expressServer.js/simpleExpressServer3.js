const express = require('express');

const app = express();
app.use(express.json());
const PORT = 3009;

app.post('/', (req, res) => {
  res.status(200).json({ message: 'data object' });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`app is listening on port ${PORT}`);
});
