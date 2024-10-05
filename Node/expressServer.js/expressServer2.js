const express = require('express');

const app = express();
const PORT = 3008;

app.post('/', function (req, res) {
  console.log('I am listening to POST request');
  res.send('Response from server');
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is listening on port ${PORT}`);
});
