let express = require("express");

const app = express();

// app.request(express.json());

app.post('./post', (req, res)=>{
    req.body;
    res.status(200).json({message: "I am post API."})
    res.end();
})

const port = 3003;

app.listen(port, ()=>{
    `Server is running on port ${port}`
})

