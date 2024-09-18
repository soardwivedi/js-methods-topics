const a = 4;

if (a === 5) {
  console.log('a value is 5');
} else if (a === 6) {
  console.log('a value is 6');
} else if (a === 7) {
  console.log('a value is 7');
} else if (a === 8) {
  console.log('a value is 8');
} else {
  console.log(`a value is ${a}`);
}

const y = 10;

if (y < 20) {
  console.log('y value is less than 20');
  if (y <= 10) {
    console.log('y value is less than or equal to 10');
  } else {
    console.log('y value is greater than 10');
  }
} else {
  console.log('y value is greater than 20');
}

const z = 5;
switch (z) {
  case 1:
    console.log('my value is 1');
    break;
  case 2:
    console.log('my value is 2');
    break;
  case 3:
    console.log('my value is 3');
    break;
  case 4:
    console.log('my value is 4');
    break;
  default:
    console.log('my value is not 1/2/3/4');
}
