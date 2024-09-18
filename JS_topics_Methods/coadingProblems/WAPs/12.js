 //WAP to calculate sum of number between 1 to 5 -> in class

 function sumnums(init, max){
 let sum = 0;
for(let i = init; i<=max; i++){
   
     // sum = sum + i;
     sum +=i;
}
return sum;
 }
console.log(sumnums(1, 5));