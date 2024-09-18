let arr = [1, 2, 3, 2, ,4, 5, 1, 3, "a", "a", "r", "r", "v"]

let repetation = arr.reduce((x, y)=> {
    if(!x[y]){
        x[y] = 0
    }
    x[y]++;
    return x;
}, {})

console.log(repetation);



// app.use((req, res, next) => {
//     // Perform some preprocessing or logging
//     console.log('Request received:', req.method, req.url);
  
//     // Pass control to the next middleware
//     next();
//   });
  