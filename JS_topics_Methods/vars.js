// Ways of declaring variable
// 1. const variable value cannot be changed or cannot initiated with same name in the same code block
// 2. let variable value can be changed but cannot be initiated with same name in the same code block
// 3. var variable value can be changed and can be initiated with same name in the same code block

function a(){
    const variableName = 'Variable value';
}

function ab(){
    const variableName = 'Variable value';
}

if(1=== 1){
    const variableName = 'Variable value';
}

const variableName = 'Variable value';
console.log('variable name', variableName);

var a = '1';
var a = '2';
a = 50;
console.log('a', a);