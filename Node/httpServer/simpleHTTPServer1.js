const http = require('http');
const PORT = 3003;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('some content');
  res.end(JSON.stringify({ message: 'Hello, World!' }));
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
