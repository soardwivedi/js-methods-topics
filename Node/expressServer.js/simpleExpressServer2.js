const express = require('express');

const app = express();
const port = 3002;

app.post('/', (req, res) => {
  console.log('we are posting something...');
});

app.listen(port, (error) => {
  if (error) console.error(error);
  console.log(`Server is listening on ${port}`);
});
