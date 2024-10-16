function checkPalindrom(string) {
  let clearString = '';
  let lowerCaseString = string.toLowerCase();
  let stringLength = string.length;

  for (let i = 0; i < stringLength; i++) {
    let char = lowerCaseString[i];
    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      clearString += char;
    }
  }
  console.log(clearString);
  for (let i = 0; i < clearString.length / 2; i++) {
    if (clearString[i] != clearString[clearString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrom('A man, a plan, a canal: Panama')); // true
