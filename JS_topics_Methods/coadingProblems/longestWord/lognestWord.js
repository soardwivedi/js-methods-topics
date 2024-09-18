function findLongestWord(str) {
  const strSplit = str.split(' ');
  let longestWord = 0;
  let result = "";
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
    result = strSplit[i];
}
  }
  return result;
}

function findLongestWord2(str) {
  return str.split(' ').reduce((maxword, word) => word.length > maxword.length ? word : maxword, '');
}
console.log(findLongestWord2("The quick brown fox jumped over the lazy dog asdfas"));
