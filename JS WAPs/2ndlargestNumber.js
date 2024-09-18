let arr = [11, 2, 14, 7, 6, 25, 19, 34, 47, 10];

const getSecondLargestNumber = (arr=[])=>{
let largestNumber = arr[0];
let secondLargesNumber = [0];

for (let i=0; i < arr.length; i++){
 if(arr[i] > secondLargesNumber) {
    secondLargesNumber = largestNumber;
    largestNumber = arr[i]
 }else if(arr[i] > secondLargesNumber){
secondLargesNumber= arr[i]
 }
}
return secondLargesNumber;
}

const data = getSecondLargestNumber(arr);
console.log(data);