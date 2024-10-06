const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Success');
  }, 2000);
})
  .then(() => {
    console.log('successfully in then scope');
  })
  .catch((message) => {
    console.log('Failed due' + message);
  });
