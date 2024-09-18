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

// If we want to add email property parmanentaly in object than we have to 
// do "this.email" as writen in below function after return. (syntax => this.key)
// function getEmail(){
//     return this.email = `Email of ${this.name} is ${this.name}@gmail.com`
//     }

let studentEmail = getEmail.call(student);

console.log(studentEmail);

 function chooseSubject(sub1, sub2){
            console.log(sub1, sub2); 
 }

 let subjects = chooseSubject.call(teacher, "Math", "Hindi")

 console.log(subjects);
 

 console.log(student);

 let teacherEmail = getEmail.call(teacher);

 console.log(teacherEmail);

 let anotherSubject = chooseSubject.call(teacher, "JS", "Python")

 let anotherSubject2 = chooseSubject.apply(teacher, ["JS", "Python"])