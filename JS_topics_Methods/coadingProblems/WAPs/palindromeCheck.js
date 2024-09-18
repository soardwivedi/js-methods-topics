let palindrome = 1223221;

// prompt("enter a plindrome:")
const palindromeCheck = () => {
let RevPalindrome = palindrome.toString().split("").reverse().join("");
let OriPalindrome = palindrome.toString();

if (OriPalindrome  == RevPalindrome) {
    console.log("This is a palindrome.")
}
else {console.log("This is not a palindrome.");
}
}

palindromeCheck();


// const makeRev = 12321;

// let rev = makeRev.split("").reverse().join("");
// console.log(rev);