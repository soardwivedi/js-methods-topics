let rows = 5;
let pattern = "";
for(let n = 1; n<= rows; n++){
   for(let num = 1; num<= n; num++){
      pattern += num%2 ==0?'#': num;
   }
   pattern += "\n"
}

console.log(pattern);



let rowNums = 6;
let patt = "";
for (let i= 1; i<= rowNums; i++){
   for(let n = 1; n<= i; n++){ 
      patt = patt + n;
   }
patt += "\n"
} 

console.log(patt);

let rowNumss = 6;
let pattt = "";
for (let i= 1; i<= rowNumss; i++){
   for(let n = 1; n<= i; n++){ 
      pattt = pattt + i;
   }
pattt = pattt + "\n"
} 

console.log(pattt);