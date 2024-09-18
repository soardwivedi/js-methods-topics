let http = require("http");

let server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.end("Hello world");
})

const port = 3001;

server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})