const string = 'a';

function checkPalindrome(string) {
  if (string.length < 2) return false;
  let length = string.length / 2;

  for (let i = 0; i < length; i++) {
    if (string[i] !== string[length * 2 - 1 - i]) return false;
    return true;
  }
}

console.log(checkPalindrome('string'));
