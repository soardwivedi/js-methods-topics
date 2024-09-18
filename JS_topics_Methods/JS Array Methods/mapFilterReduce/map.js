let coading = ["js", "ruby", "java", "python", "cpp"]

let numbersArray = [2, 3, 4, 5];

function doubleEven(num){
    let evenNumArray= [];
    if(num % 2 == 0){
       let evenNum = num*2
        evenNumArray.push(evenNum);
    }
    return evenNumArray;
}


console.log(numbersArray.map(doubleEven));