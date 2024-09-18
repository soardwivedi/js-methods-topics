const obj = {
    name : "Vivek",
    dob: "12-12-1996"
};

function finddob(){
return this.name+ " date of birth is " + this.dob +".";
};

const dateOfBirth = finddob.bind(obj);
console.log(dateOfBirth);
console.log(dateOfBirth());