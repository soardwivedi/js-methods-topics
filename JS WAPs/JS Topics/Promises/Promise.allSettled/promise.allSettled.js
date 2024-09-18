let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise1 resolved.")
    }, 1000)
});

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise2 resolved.")
    }, 2000)
});

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Promise3 reject.")
    }, 3000)
});

let promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise4 resolved.")
    }, 4000)
});

Promise.allSettled([promise1, promise2, promise3, promise4])
.then((result)=>{
console.log(result);
})