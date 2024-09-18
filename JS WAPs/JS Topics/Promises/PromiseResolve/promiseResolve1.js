function resolveInTwoSecond(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            resolve("Promise resolved after two seconds")
        }, 2000)
    })

}
resolveInTwoSecond()
.then((result)=>{
console.log(result);
})

.catch((err)=>{
console.error(err);
})