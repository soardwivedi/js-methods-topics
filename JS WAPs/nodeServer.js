import http, { createServer } from "http";

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain'})
})