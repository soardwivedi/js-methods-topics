// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.

// JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():

// Syntax
// class ClassName {
//   constructor() { ... }
// }


 class User{
    constructor(firstName, lastName, credit){
        this.firstName = firstName
        this.lastName = lastName
        this.Credit = credit
    }
 }


 const john = new User ("John", "Adderson", 34)
 console.log(john);