const array = [0, 1, 2, 3, 4, 5, 6, 7];

const newArray = array.map((element, index, wholeArray) => {
  console.log("element is ::", element);
  console.log("index is ::", index);
  console.log("array is ::", wholeArray);
});