 
 let arr = ["d", "d", "c"];
 function removeDuplicat(arr){
    return arr.filter(
        (item, index)=> arr.indexOf(item) === index
    );
    
 }
 console.log(removeDuplicat(arr));
