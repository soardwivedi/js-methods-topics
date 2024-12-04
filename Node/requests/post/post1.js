const express = require('express');
const app = express();
app.use(express);
app.use(express.json());
const PORT = 3009;

app.post('/api/user', (req, res) => {
  const name = req.body.name;
  if (name) {
    res.status(200).json({ message: `Hello ${name}` });
  }
  res
    .status(404)
    .json({ message: 'Inavalid User Data or No User Name Provided' });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
