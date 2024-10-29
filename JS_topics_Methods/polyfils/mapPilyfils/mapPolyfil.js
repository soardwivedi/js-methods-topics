Array.prototype.myMap = function (callbackFunc) {
  let arr = this;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(callbackFunc(arr[i]));
  }
  return res;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const newArray = array.myMap((i) => i * 2);

console.log(newArray);
