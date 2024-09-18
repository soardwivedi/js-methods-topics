const dateString = "2016-06-01T15:53:59+0000";
console.log(dateString)
const date = new Date(dateString);
console.log(date);
const unixTimestamp = Math.floor(date.getTime() / 1000);

console.log(unixTimestamp); // 1464796439
