let university = {
collegeOne: {
    studentOne: {
        name: "vivek",
        rollNo: 1
    }
},
collegeTwo: {
studentOne: {
    name: "Atul",
    rollNo: 1
}
}
}

const {collegeTwo: {studentOne:{name, rollNo}}} = university;

console.log(name);
console.log(rollNo);