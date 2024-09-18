//closure
// anonymous function below.
var sum = function(a){
console.log("Hello Viewers." + a);
var c = 4;
return function (b){
    return a+b+c 
}

}
var store = sum(200); //calling
console.log(store(5));