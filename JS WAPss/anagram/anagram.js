const data1 = 'listen';
const data2 = 'silent';

function checkAnagram(string1, string2) {
  if (string1.length !== string2.length) return 'Not an anagram';

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if (string[i] !== string2[j]) return 'Anagram';
    }
  }
}
