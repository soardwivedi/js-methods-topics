//creatin promise wit (new Promise) key word.

let data = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve({name: "vivek", age: 29}) //resolving promise
    }, 2000)
})


//resolving promise with (.then) keyword.

data.then((item)=>{
    console.log(item);
})


//creatin promise wit (new Promise) key word.

let data1 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        reject("some issue.")
    }, 2000)
})


//resolving promise with (.then) method.

data1.then((item)=>{
    console.log(item);
})
.catch((err)=> {                //handling promise with (.cath) method
    console.log("catch block", err);
})