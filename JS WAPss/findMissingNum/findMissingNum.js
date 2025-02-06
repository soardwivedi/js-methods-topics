const num = [1, 2, 3, 4, 6, 7, 9, 8];

const findMissingNum = (arr) => {
  let arrSum = 0;
  let numSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  console.log(arrSum);
  //   for (let i = 0; i < 10; i++) {
  //     numSum += i;
  //   }
  numSum = (9 * (9 + 1)) / 2;
  console.log(numSum);
  return numSum - arrSum;
};

console.log(findMissingNum(num));
