let sen = "upset than do, happy than do, bored than do, bad mood than do";

// A single replacement:
// in single replacement only first word of sentence will be replaced by the second word.
let singleReplace = sen.replace("do", "code");
console.log(singleReplace);

// A global replacement:
// In global replacement all words those matches the condition replaced by the second word.

let newSen = sen.replace(/than/g, "then");
console.log(newSen);

let quote = newSen.replace(/do/g, "code.")
console.log(quote);

//replaceAll serves the same purpose that global replacement do.
let replaceAll = newSen.replaceAll("do", "code")
console.log(replaceAll);