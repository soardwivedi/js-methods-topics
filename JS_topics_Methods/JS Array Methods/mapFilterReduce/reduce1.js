let num = [1, 2, 3, 4, 6, 8, 3, 8, 8, 34, 32];

let max = num.reduce((acc, curr)=>{
if(curr > acc){
    acc = curr
}
    return acc;
    
}, 0)

console.log(max);