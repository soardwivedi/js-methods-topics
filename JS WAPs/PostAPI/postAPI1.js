import express from "express"
import { Server } from "http";

const app = express;

app.use(express.json());

app.post('./post', (req, res)=> {
    req.body
    res.status(200).json({message: "I am the post API."})
})

const port = 1234;

app.listen(port, ()=>{
    `Server is started on port ${port}`
})