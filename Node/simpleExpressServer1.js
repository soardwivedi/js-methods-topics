const express =  require ("express");
const app = express();
const PORT = 3002;

app.post("/post", (req, res)=>{
res.send(console.log("I am the app respose"));
});

app.listen(PORT, (error)=>{
if(error){
console.log(error);
}
console.log(`app is listening on port ${PORT}`);
});