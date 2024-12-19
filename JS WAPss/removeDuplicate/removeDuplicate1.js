const arr = [1, 3, 2, 2, 4, 5, 4, 6];
const removeDuplicates = (arr) => {
  let newArray = [];
  let uniqueElements = {};
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueElements[arr[i]]) {
      uniqueElements[arr[i]] = true;
      newArray[arr[i]] = arr[i];
    }
  }
  return newArray;
};

console.log(removeDuplicates(arr));
