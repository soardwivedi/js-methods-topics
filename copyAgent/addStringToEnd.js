function addNewStringAtEnd(string, stringToAdd) {
  let newName;
  let stringArray = string.trim().split(" ");
  console.log("stringArray", stringArray);
  const lastWord = stringArray[stringArray.length - 1];
  console.log("lastWord", lastWord);
  if (lastWord !== stringToAdd) {
    newName = string + " " + stringToAdd;
    return newName;
  } else {
    return string;
  }
}
const name = addNewStringAtEnd("name Copy", "Copy");
console.log(name);


function removeStringFromEnd(inputString, removeString){

}