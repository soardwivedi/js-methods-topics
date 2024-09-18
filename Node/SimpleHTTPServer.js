const http = require("http");

const server = http.createServer((req, res)=>{
res.statusCode(200);
res.setHeader("Some content");
res.end("Jai Bajarnag Bali");
// res.end("Hello world");
})

server.listen(3004, ()=>{
    console.log("Server is listening on port 3000");
})