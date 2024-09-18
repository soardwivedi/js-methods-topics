function checkPalindrom(string){
 let len = string.length/2;
 for(let i = 0; i<len; i++){
    if(string[i] == string[string.length -1 -i]) {
        // return "It is not a palindrom."
        // console.log(string[i], "bbbbbbb");
        string[len*2 - 1 - i];
    }
 }
 return "It is a palindrom.";

}

console.log(checkPalindrom("ASDFGHGFDSA"));