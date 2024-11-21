const string1 = 'silent';
const string2 = 'listen';

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let charCountObj = {};
  for (char of str1) {
    charCountObj[char] = (charCountObj[char] || 0) + 1;
  }

  for (char of str2) {
    if (!charCountObj[char]) return false;
    charCountObj[char]--;
  }
  return true;
}

console.log(checkAnagram(string1, string2));
