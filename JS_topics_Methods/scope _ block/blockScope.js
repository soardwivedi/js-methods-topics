var c= 100;
function x() {
    const c = 30;
    console.log(window.c);
    window.c = 20;
}
x();
console.log(c);