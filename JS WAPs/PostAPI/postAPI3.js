

 import { express } from "express";

 const post = ('/post', (req, res)=>{
    const data = req.body;
    res.status(200);
    res.send("I am the post API.");
    res.end();
 });

 const port = 3000;

server.listen(port, ()=>{
    `server is listining on port ${port}`
});