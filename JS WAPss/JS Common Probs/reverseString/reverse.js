function reverseString(string){
  let splitedString =  string.split("").reverse().join(""); 
  console.log(splitedString);
}

reverseString("rudra");




function reverse(str){

let arrStr = [];
let length = str.length - 1;

for (let i =length; i >= 0; i--){
    arrStr.push(str[i])
}
return arrStr.join(""); 
}


console.log(reverse("arr"));