// function findLargest(arr){

//     let length = arr.length;
   
//     for(let i = 0; i<= length; i++){

//         let largest

//  for(let j = 0; j <= length; j++){
//  if(arr[i] > arr[j]) {
//        largest = largest[i]
//        return largest
//  }
//  }
//     }
// }

let arr = [1, 2, 3, 5, 4, 1, 34];

// console.log(findLargest(arr));




let largrstNumber = [0];

function findLargest(arr){
for(let i = 1; i <= arr.length; i++){
 if(arr[i] > largrstNumber){
    largrstNumber = arr[i];
 }
}
console.log(largrstNumber);
}

console.log(findLargest(arr));





const largestNumber = arr.reduce((acc, curr)=> {
    if(curr > acc){
        acc = curr
     
  }
  return acc;
}, 0)

console.log(largestNumber);