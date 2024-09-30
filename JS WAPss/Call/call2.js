const dataObj = {
  name: 'Vivek',
  role: 'Developer'
};

function greetDevloper() {
  console.log(`Hello ${this.name} `);
}

const greet = greetDevloper.call(dataObj, dataObj.name);
