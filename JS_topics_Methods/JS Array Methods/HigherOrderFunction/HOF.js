function filterArray(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArray.push(arr[i]);
      }
    }
    return filteredArray;
  }
  