new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1), 1000
    })
})
.then((result)=>{
    console.log(result);
    return result * 2;
})
.then((result)=>{
    console.log(result, "then2");
    return result * 3;
})
.then((result)=>{
    console.log(result, "then3");
    return result * 4;
});