// The trimStart() method removes whitespace from the beginning of a string.
// The trimStart() method does not change the original string.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

const string1 = "    name     ";
const string2 = "     name";
const string3 = "name       "

const string4 = string1.trimStart();
const string5= string2.trimStart();

console.log("string4 is",string4, "string5 is", string5, "string3 is", string3);
