// Function curring Example with bind.

let multiply = function(x, y){
    console.log( x * y); 
};

let multiplyByTwo = multiply.bind(this, 1500000);
multiplyByTwo(70);


// Function curring Example with cosure.

let addition = function(x){
return function(y){
    console.log(x + y);
}
}

let addWithTwo = addition(2);
addWithTwo(3);