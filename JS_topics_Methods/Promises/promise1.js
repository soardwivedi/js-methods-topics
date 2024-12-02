const promise1 = Promise.resolve(3);
const promise2 = new Promise((res, rej) => {
  const data = false;
  if (res) {
    res('Data fetched successfully');
  }
});
