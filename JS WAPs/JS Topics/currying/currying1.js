function add(x){
    return (y)=>{
return (z)=>{
return x + y + z;
}
}
}

console.log(add(2)(2)(3));