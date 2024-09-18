const express = require("express");
const app = express();
const PORT = 3002;
app.post('/post', (req, res) => {
    console.log("Post something");
}
)

app.listen(PORT, (error)=>{
    if (error) console.log(error)
    console.log( `app is linstening on ${PORT}`)
})