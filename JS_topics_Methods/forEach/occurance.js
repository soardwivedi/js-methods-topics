const number = 12345678912345;
const occurrences = countDigitOccurrences(number);

function countDigitOccurrences(number) {
  const digitOccurrences = {};
  const digits = number.toString().split('');

  digits.forEach((digit) => {
    digitOccurrences[digit] = (digitOccurrences[digit] || 0) + 1;
  });

  return digitOccurrences;
}



for (let digit in occurrences) {
  console.log(`Digit ${digit} occurs ${occurrences[digit]} times`);
}




const arr = [1,2,3,2,4,3,1,3]

// const splitNumber = arr.split('')

