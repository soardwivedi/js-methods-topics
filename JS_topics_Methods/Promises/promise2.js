const myPromise = new Promise((res, rej) => {
  const data = false;

  if (data) {
    res(console.log('promise resolved'));
  } else {
    rej(console.log('rejected'));
  }
});

myPromise
  .then((res) => {
    console.log('resolved successfully');
  })
  .catch((err) => {
    console.log('rejected');
  });
