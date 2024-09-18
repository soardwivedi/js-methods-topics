function removeDuplicat(arr){
    var length = arr.length;

    for(let i = 0; i <= length; i++){
        var newArr = [];
        for(let j = 0; j <= length; j++){
        if(arr[i] == arr[j]) 
        break

        if(arr[i] !== arr[j]) {
    newArr = newArr.push(arr[i])

    console.log(newArr);
        }
        }
    }
    

}

let arr = [1, 2, 4, 2, 3, 4];

removeDuplicat(arr);