let promise = new Promise((resolve, reject)=> {
    function add(x, y) {
 resolve (x+ y);
    }
})
 console.log(add(2, 3));