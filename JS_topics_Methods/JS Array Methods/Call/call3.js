let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

function printFullName(homeTown){
    console.log(this.firstName + " " + this.lastName +  " from " + homeTown);
}


printFullName.call(name2, "Mumbai");