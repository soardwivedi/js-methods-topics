const { log } = require("console");
let http = require("http");

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader()
    res.end("Hello world.");
})

const port = 3000;

server.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})