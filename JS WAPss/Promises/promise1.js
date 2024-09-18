let data = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        reject("some issues.")
    }, 2000)
})

data.then((item)=>{
console.warn(item)
})
.catch((err)=> {
    console.warn("catch block", err)
})