let student = {
    firstName: "Vivek",
    lastName: "Dwivedi",
    age: 29
}


let teacher = {
    firstName: "Akshay",
    lastName: "Saini",
    age: 29 
}

 function getEmail(){
    return  `${this.firstName}.${this.lastName}@test.com`
  }
console.warn(getEmail.call(student));
console.warn(getEmail.call(teacher));

function chooseSubject(sub1, sub2){
    console.warn(sub1, sub2);
}

console.warn(teacher, "Math", "English"); 
// in call we can pass any type of parameter like  array, object, string, number

function chooseSubject(sub1, sub2){
    return [sub1, sub2];
}
console.warn(chooseSubject.apply(teacher, ["math", "english"]))




const person = {
    name: "John"
  };
  
  const anotherPerson = {
    name: "Jane",
  };
  function greet(message) {
    return console.warn(`${message}, ${this.name}!`);
  }
  console.warn(greet.call(anotherPerson, "Ram Ram")); // Output: Ram Ram, Jane!
  console.warn(greet.call(person, "Ram Ram"));



  let userAddress = function(district, state, pinCode){
console.log(this.name + " address is " + district + state + pinCode);
  }

  let user1 = {
    name: "Vivek",
    mobileNo: 8743046614
  }


  let user2 = {
    name: "Rudra",
    mobileNo: 8950142844
  }

  userAddress.call(user1, "Gopalganj ", "Bihar", ' PIN Code 841437');

  let user3 = {
    name: 'Rishi',
    mobileNo: 9654655001
  }

  userAddress.apply(user3, ["Gopalganj ", "Bihar", ' PIN Code 841437']);


  let printUserName = userAddress.bind(user2);
  console.log(printUserName("Gopalganj", " Bihar", " PIN Code 841437"));