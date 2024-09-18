// A video by code step by step 
// promising code  => let data = new Promise()
// consuming code  => data.then()



// let data = 1;
// console.warn(data)
// data = 2;
// setTimeout(()=> {
//     console.warn(data);
// }, 2000)
// data = 3;
// console.warn("last", data);


// let data = new Promise((resolve, reject)=> {
// setTimeout(()=> {
//     resolve("done")
//     //  throw  new Error ("data issue")

//     //  below two lines are same and give same result
//       // reject(new Error ("data issue"))
//     //   throw  new Error ("data issue")
// }, 2000)
// })




// console.warn(data);



// promising code (line number 17 to 26)




// Promise Chaining (below)

// data.then((item)=> {
//     // throw  new Error ("data issue")  //(not a part of promise chaining it is error handling.)
//     console.warn("1st", item);
//     return item*10;
// })
// // .then((item2) => {
// //     console.warn("2nd", item2);
// //     return item2*10;
// // })
// // .then((item3)=> {
// //     console.warn("3rd", item3)
// // })
// .catch((error)=> {
// console.warn("Catch block", error)
// })
// console.log("Hello");





// promise.all(); (below)

// let data = Promise.all([
//     new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve("2 s.catch((error)=> {
//     console.warn("Catch block", error)
// })ec")
//     }, 2000)
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(()=> {
//            reject("1 sec")
//         }, 1000)
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve("4 sec")
//         }, 4000)
//     })
// ]
//     )

// data.then((item)=> {
//     console.warn("1st", item);
//     return item*10;
// })
// .catch((error)=> {
//     console.warn("Catch block", error)
//     })




//promise.allSettled();

// let data = Promise.allSettled([
//     new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve("2 sec")
//     }, 2000)
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(()=> {
//            reject("1 sec")
//         }, 1000)
//     }),
//     new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve("4 sec")
//         }, 4000)
//     })
// ]
//     )

// data.then((item)=> {
//     console.warn("1st", item);
//     return item*10;
// })
// .catch((error)=> {
//     console.warn("Catch block", error)
//     })




    //Promise.race();

let data = Promise.race([
    new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("2 sec")
    }, 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(()=> {
           resolve("5 sec")
        }, 5000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("4 sec")
        }, 4000)
    })
]
    )

data.then((item)=> {
    console.warn("1st", item);
    return item*10;
})
.catch((error)=> {
    console.warn("Catch block", error)
    })



// finally keyword => finally keword runs without caring
// about the result of promise. Either the result of promise 
// is resolve or reject "finally" always run.

// data.finally((item)=> {
//     console.warn("final block", item)
// }) 



// Oue: What happen if we first resolve and then reject or vice versa?
// Ans : no matter what are we doing latter i.e. resolve or reject 
//       the first result alwayas considered no matter what is the 
//        result. If resolve comes first then resolve will be considered
//       or if reject comes first then reject will be considered.
let dataInterviewQuestion = new Promise((resolve, reject)=> {
setTimeout(()=> {
    resolve("2 sec");
    reject("reject");
 
}, 2000)
})
dataInterviewQuestion.then((item)=> {
    console.warn("then block IntQuestion", item);
})
.catch((error)=> {
    console.warn("Catch block", error)
    })