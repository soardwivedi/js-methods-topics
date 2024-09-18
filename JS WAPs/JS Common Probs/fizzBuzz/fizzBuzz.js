


function fizzBuzz(x, y){
    for(let i = x; i <= y; i++)
     {
     if(i % 2 == 0 && i % 3 == 0){
         console.log("fizzBuzz");
     }
    else if(i % 2 == 0){
         console.log("fizz");
     }
    else if(i % 3 == 0){
         console.log("buzz");
     }
     else console.log(i);
 }
 }
 
 console.log(fizzBuzz(4, 13));
 







