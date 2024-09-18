appp.post('./postAPI', (req, res)=>{
let data = req.body;
 var num1 = data.num1;
 var num2 = data.num2;

result = num1 + num2;

res.send("Addition =", result)
}
)