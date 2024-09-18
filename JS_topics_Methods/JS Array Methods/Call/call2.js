let student = {
    name: "vivek",
    rollNo: 12,
    trade: "civil"
};

let student2 = {
    name: "atul",
    rollNo: 7,
    trade: "cs"
};

function createEmail(sub1, sub2){
    return this.name + " emial is " + this.name + "@" + this.trade + ".com and he is good in " + sub1 + " and " + sub2
};

let studentEmail = createEmail.call(student, "SA", "BCM ");

console.log(studentEmail);

let student2Email = createEmail.call(student2, "DB", "Node.js ");
console.log(student2Email);

