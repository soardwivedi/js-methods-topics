function reverseString(string){
   

if (string.length == 0){
    return console.log("This is not a string."); 
}

let  revArr = [];
let length = string.length -1;

// Looping from the end
    for(let i = length; i >= 0; i--){
            revArr.push(string[i])
    }
   return revArr.join("");
}

console.log(reverseString("asd"));