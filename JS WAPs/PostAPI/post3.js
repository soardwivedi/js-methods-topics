import express from "express";

const app = express;

// app.request(express.json());

app.post((req, res)=> {
    req.body;
    res.status(200).json({message: "I am post API."})
    res.end();
})

const port = 3000;

app.listen(port, ()=>{
`Server is listening on port ${port}`
})