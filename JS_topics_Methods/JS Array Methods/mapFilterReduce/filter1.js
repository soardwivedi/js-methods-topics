let arrOfNum = [1, 3, 38, 28, 89, 34, 23, 23, 2, 4, 2];

let canNotVote = (i)=> {
   if(i <= 16){
   console.log(i);
   return i;
   } 
}
 let juvenile = arrOfNum.filter(canNotVote);

 console.log(juvenile);