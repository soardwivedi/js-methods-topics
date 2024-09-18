

let student = {
    firstName: "Vivek",
    lastName: "Dwivedi",
    yearOfGraduation: "2nd"
}
function year(){
    return `${this.firstName} ${this.lastName} is currently in ${this.yearOfGraduation} year of graduation.`
}
;

console.log(year.call(student));