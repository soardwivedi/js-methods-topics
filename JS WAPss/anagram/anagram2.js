const string1 = 'silent';
const string2 = 'listen';

function checkAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  // Create an object to store character counts from the first string.
  let charCountObj = {};
  for (char of string1) {
    charCountObj[char] = (charCountObj[char] || 0) + 1;
  }

  for (char of string2) {
    if (!charCountObj[char]) {
      return false;
    }
    charCountObj[char]--;
  }
  return true;
}

console.log(checkAnagram('hello', 'ohell'));
