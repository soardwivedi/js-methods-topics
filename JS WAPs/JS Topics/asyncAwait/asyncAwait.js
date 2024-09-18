const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
     resolve("promise1 resolved.");
    }, 1000);
});

async function consumingPromise1(){
    try {
        const response = await promise1
        // console.log(response);
        const test = "Additional data from await."
    console.log(test, "addi");
    } catch (error) {
        console.log(error, "error");
    } 
};
consumingPromise1();