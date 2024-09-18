function domain(email){
    return email.split("@")[1]
}

// above the "@" is the string from where the whole string will split.
// and in large bracket [], the index value of the splited element which 
// we need into the array 
// here the there are two parts "admin" and "gmail.com" so, index value of 
// "admin" is "0" and "gmail.com" is "1" and we need second part 
// so in large bracket we intered the index valu of that.
// i.e. "1".
console.log(domain("admin@gmail.com"));