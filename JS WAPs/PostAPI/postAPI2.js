import express from "express";

const app = express;

app.use(express.json());

app.post('./post', (req, res)=> {
    req.body;
    res.status(200).json({message: "I am post API."})
})

port = 3000;

app.listen(port, ()=> {
    `Server is running on port ${port}`
})