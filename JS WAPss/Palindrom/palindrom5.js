// A palindrome is a word, phrase, number, or sequence that reads the same forwards and backward, like "madam," "racecar," or the number 121

function isPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let cleanedStr = "";
  for (let i = 0; i < lowerStr.length; i++) {
    let char = lowerStr[i];
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleanedStr += char;
    }
  }
  console.log(cleanedStr);
  let reversedStr = "";
  for (let i = cleanedStr.length - 1; i >= 0; i--) {
    reversedStr += cleanedStr[i];
  }
  return cleanedStr === reversedStr;
}

let string1 = "A man, a plan, a canal: Panama";
let string2 = "Hello, World!";

console.log(`"${string1}" is a palindrome:`, isPalindrome(string1)); // true
console.log(`"${string2}" is a palindrome:`, isPalindrome(string2)); // false
