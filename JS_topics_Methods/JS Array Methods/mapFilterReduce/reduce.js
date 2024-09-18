let arr = [1, 4, 6, 3, 9, 55, 5];

const maximum = arr.reduce((acc, curr)=> {
   if(curr > acc){
    acc = curr
   } 
    return acc;
}, 0)

console.log(maximum);