











var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1, 3));

var a = [1,2,3,4,5];
 c = a.slice(2,4);
 console.log(c);

 let ac;
 console.log((typeof ac));
 console.log((typeof a));

 let nullData = null;
 console.log((typeof nullData));
//console.log(users.slice(1));

// syntex
// splice(start)
// splice(start, deleteCount)
// splice(start, dleteCount, item1)
// splice(start, deletCount, item1, item2, itemN)

users.splice(1, 3, 'Hi', 'Bye');

//Here 1 is the starting index value of array and the 3 is 
// the count value of array elements starting from index 
// value in first argument here that is 1.
console.log(users);


// Hitesh Choudharyu video link :- https://www.youtube.com/watch?v=t1qDSAUclzI



