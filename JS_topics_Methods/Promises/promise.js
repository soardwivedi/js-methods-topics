const myPromise = new Promise((resolve, reject) => {
  const data = false;

  if (data) {
    resolve('Data fetched successfully');
  } else {
    reject('Error in fetching data');
  }
});

myPromise
  .then((resolve) => {
    console.log('Data fetched');
  })
  .catch((reject) => {
    console.log('Error in fetching data in catch');
  });
