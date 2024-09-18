let coading = ["js", "ruby", "java", "python", "cpp", "java"];

let arrOfNum = [1, 3, 38, 28, 89, 34, 23, 23, 2, 4, 2];

let canVote = (i)=> {
   if(i >= 18){
   console.log(i);
   return i;
   } 
}
 let adult = arrOfNum.filter(canVote);

 console.log(adult);

