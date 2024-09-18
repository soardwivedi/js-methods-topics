let student = {
    name: "Vivek",
    id: 1234
}

let teacher = {
    name: "Rudra",
    id: 123
}

function getEmail(){
return `Email of ${this.name} is ${this.name}@gmail.com`
}

let studentEmail = getEmail.bind(student);

console.log(studentEmail());





//  function chooseSubject(sub1, sub2){
//             console.log(sub1, sub2); 
//  }

//  let subjects = chooseSubject.call(teacher, "Math", "English")

//  console.log(subjects);


















