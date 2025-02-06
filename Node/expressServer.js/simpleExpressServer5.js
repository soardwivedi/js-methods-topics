const exptress = require('express');

const app = exptress();
const PORT = 3000;

app.post('./api/addUser', (req, res) => {
  console.log('I am listenig');
  res.send('User added successfully');
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Server is listening on port ${PORT}`);
});
