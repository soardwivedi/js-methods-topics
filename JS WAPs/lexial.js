function a(){
    b();
    function b(){
console.log(d); 
    }
}
let d= 10;
a();
