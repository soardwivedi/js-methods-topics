const arr = [1, 3, 2, 2, 4, 5, 4, 6];
const removeDuplicates = (arr) => {
  let newArray = [];
  let uniqueElements = {};
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements[arr[i]]) {
      uniqueElements[arr[i]] = true;
      newArray[index] = arr[i];
      index++;
    }
  }
  return newArray;
};

console.log(removeDuplicates(arr));
