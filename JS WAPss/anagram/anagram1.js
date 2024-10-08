function isAnagramOptimized(str1, str2) {
  // Remove spaces and convert strings to lowercase
  let cleanedStr1 = str1.replace(/\s+/g, '').toLowerCase();
  let cleanedStr2 = str2.replace(/\s+/g, '').toLowerCase();

  // If the lengths are not equal, they cannot be anagrams
  if (cleanedStr1.length !== cleanedStr2.length) {
    return false;
  }

  // Create a character frequency map for the first string
  let charCount = {};

  for (let char of cleanedStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
    console.log('charCount is =>', charCount);
    console.log('charCount[char]', charCount[char]);
  }

  // Compare the character counts with the second string
  for (let char of cleanedStr2) {
    if (!charCount[char]) {
      return false; // If character is not present or count is zero
    }
    charCount[char]--;
  }

  return true;
}

// Example usage:
console.log(isAnagramOptimized('listen', 'silent')); // true
// console.log(isAnagramOptimized('hello', 'ollhe')); // true
// console.log(isAnagramOptimized('node', 'done')); // true
// console.log(isAnagramOptimized('abc', 'def')); // false
