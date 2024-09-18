const arr  = [5, 1, 3, 2, 6]

//sum or max

function findSum (arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(findSum(arr));

const sumOutput = arr.reduce(function(acc, curr){
 acc = acc + curr;
 return acc;
}, 0)
console.log(sumOutput);


function findMax(arr) {
let max = 0;
for(let i=0; i< arr.length; i++){
    if(arr[i]> max){
        max = arr[i];
    }
}
return max;
}
console.log(findMax(arr));

const output = arr.reduce(function(acc, curr){
    if (curr > acc) {
        acc = curr
    }
    return acc;
}, 0);

console.log(output);



const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "vivek", lastName: "dwivedi", age: 26}
];

// acc = { 26: 2, 75: 1, 50: 1}

// const output1 = users.reduce(function(acc, curr){
// if(acc[curr.age]){
//     acc[curr.age] = ++acc[curr.age];
// }else{
//     acc[curr.age] = 1;
// }
// return acc
// }, {});

// console.log(output1);


const ageLessThan30 = function(x){
    x.age < 30;
} 

const age30 = users.filter(ageLessThan30)

const outputAge = users.filter((x) => x.age<30).map((x)=> x.firstName);

console.log(outputAge);


const ageGreaterThan30 = users.reduce(function(acc, curr){
acc.age > curr.age;
return acc.firstName;
}, 1)
console.log(ageGreaterThan30);



