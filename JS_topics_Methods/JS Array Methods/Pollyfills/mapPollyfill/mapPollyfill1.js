

Array.prototype.myMap = function (cb) {
    let temp = [];

    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i], i, this));
    }
    return temp;
}

let num  = [1, 2, 3, 4];

let multiplyThree1 = num.myMap((n)=> {
    return n * 2
}
    );
    console.log(multiplyThree1);

 let multiplyThree = function tripal(i){
     return i * 3
 };

 let outputTripal = num.map(multiplyThree);
 console.log(outputTripal);