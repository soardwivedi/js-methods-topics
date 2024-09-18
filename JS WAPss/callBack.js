function add(a, b, callback){
 const result = (a + b);
 console.log(result);
 callback();
}
function multiply(a, b) {
    console.log( 3 * 4);
  }
add (3, 4, multiply)

