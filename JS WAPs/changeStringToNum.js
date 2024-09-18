// Function to convert a string to a number
function convertStringToNumber(string) {
    var number = parseInt(string); // Use parseFloat to convert the string to a floating-point number
  
    if (isNaN(number)) {
      return NaN; // Return NaN if the conversion is not successful
    }
  
    return number; // Return the converted number
  }

  let convertedNumber = convertStringToNumber("12345");

  console.log(convertedNumber);
  console.log(typeof(convertedNumber))

