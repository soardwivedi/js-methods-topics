function waitForTwoSeconds(){
    return new Promise((resolve, reject)=>{
         setTimeout(()=>{
            resolve("Promise is resolving after 2 seconds.");
        }, 2000)
    })
}
waitForTwoSeconds()
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.error(err);
})