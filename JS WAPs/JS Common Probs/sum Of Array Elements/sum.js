let arr = [3, 7, 4];

let sumOfArray = arr.reduce((acc, sum)=>{
 let sumOf = acc + sum;
 return sumOf
}, 0)

console.log(sumOfArray);