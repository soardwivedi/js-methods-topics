function findThirdLargest(array){

    let arrayLength = array.length;

    if(arrayLength < 3){
        return "Please provide a valid array."
    };

    let first = array[0];
    for (let i = 1;
             i < arrayLength; i++){
                if (array[i] > first){
                    first = array[i];  
                }
             }
            console.log(first, "I am largest value.");
        
    let second = array[0];
    for(let i = 1; 
            i< arrayLength; i++){
                if(array[i] > second && array[i]< first){
                    second = array[i];
                }
            }
    console.log(second, "i am 2nd largest.");

    let third = array[0];
    for(let i = 1; 
            i< arrayLength; i++)
    if(array[i]> third && array[i]< second)
    third = array[i];
    return console.log(third);
};

let arr = [1, 2, 3, 4, 5, 6]
console.log(findThirdLargest(arr));