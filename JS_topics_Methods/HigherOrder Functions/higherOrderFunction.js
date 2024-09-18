function higherOrderFunction1(callback){
console.log("inside higher order function");
callback();
}

function higherOrderFunction(callback) {
    // Perform some operations
    // Call the callback function
    callback();
}
function callbackFunction() {
    console.log("Callback function is executed.");
}
// Passing the callback function to the higher-order function
higherOrderFunction1(callbackFunction);