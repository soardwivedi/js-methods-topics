function reverseNum(x) {
    const reverse = x.toString().split("")

    let resut = "";
    for (let i=reverse.length-1; i >= 0; i--){
        resut += reverse[i];
    }
    return resut;
}

console.log(reverseNum(253));