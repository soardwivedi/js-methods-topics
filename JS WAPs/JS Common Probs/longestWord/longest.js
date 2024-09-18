// JavaScript code to for the above approach..
     
let longestWord = (str) => {
    let string = str.split(" ");
    let longest = 0;
    let longest_word = null;
    for (let i = 0; i < string.length; i++) {
  if (longest < string[i].length) {
    longest = string[i].length;
    longest_word = string[i];
  }
    }
    return longest_word;
  };
   
  console.log(
    longestWord(
  "Hello guys this is geeksforgeeks where students learn programming"
    )
  );