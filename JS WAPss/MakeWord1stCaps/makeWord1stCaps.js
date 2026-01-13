const myName = "my name is vivek dwivedi";
const makeWord1stCaps = (str) => {
  strNew = str.toLowerCase();
  const words = strNew.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words.join(" ");
  }
  return words;
};

console.log(makeWord1stCaps(myName));
