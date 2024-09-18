const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise1 resolved.");
    },2000);
});

const consumingPromise1 = async function (){
    try {
        const response = await promise1;
        console.log(response, "Promise one consumed thats why I am here.");
    } catch (error) {
        console.log(error, "I am here because your promise is rejected.");
    } 
};

consumingPromise1();