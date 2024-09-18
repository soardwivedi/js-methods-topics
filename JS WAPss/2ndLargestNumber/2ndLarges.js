const arr = [2, 6, 8, 3, 9, 12, 24,9];
const SecondLargestNum = arrayNoDuplicateKey(arr);
// find2ndLargestNum(arr);
console.log("SecondLargestNum", SecondLargestNum);

//
function arrayNoDuplicateKey(array){
 let newArray = []
 
 newArray = array.map((element)=>{
    console.log(element);
    // !array.includes(element);
    newArray.push(!newArray.includes(element))
 });
 return newArray
}

function find2ndLargestNum(array) {
    let sortedArray;
    sortedArray = array.sort(function(a, b){return a - b});
return sortedArray;
}