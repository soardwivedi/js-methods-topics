// WAP to check wheather the person is elegible to marry or not.


const isElegibleToMarry = (personAge) => {
    if (personAge >= 21) {
        console.log("You are elegible.");
    }
    else{
        console.log("Sorry, You are not elegible to get marry.");
    }
}
isElegibleToMarry(21);