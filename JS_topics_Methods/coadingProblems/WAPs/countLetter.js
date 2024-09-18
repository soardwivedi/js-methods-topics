
var str = "Hello, worldd!";

console.log(str.trim().length);
// console.log(splitString);

 function letterCount(){
    let stringCount = 0;
    let string = "asdf asdf";
    const splitString = string.split("")
    for(let i = 0; i <= string.length; i++ ) {
        stringCount += 1;
        return stringCount;
    }
}

console.log(letterCount("asdf"));