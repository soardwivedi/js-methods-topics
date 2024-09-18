const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise1 resolved.");
    }, 1000);
})

const makingAsync = async function consumingPromise1(){
    try {
        const response = await promise1;
        const afterAwaitPromise1 = "Waiting of promise1 finished."
        console.log(afterAwaitPromise1, "Dont get confused I am here after resolving the promise1.");
    } catch (error) {
        console.log(error, "I am here because your promise get rejected.");
    }
};

makingAsync();