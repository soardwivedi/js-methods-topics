let name = {
    firstName: "vivek",
    lastName: "dwivedi"
}

function homeTown(town, village){
    return this.firstName + " " + this.lastName + " home town is " + town + " " + "and village is "+ village + ".";
};

let homeTounName = homeTown.bind(name, "Gopalganj", "Dubey Pachamawa");

console.log(homeTounName);
console.log(homeTounName()); 

 // date: yup.date().required("date is required"),