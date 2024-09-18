function isPalindrome(str) {
    // Convert the string to lowercase
    let lowerStr = str.toLowerCase();
    
    // Initialize an empty string to store the cleaned characters
    let cleanedStr = '';
    
    // Loop through each character and keep only alphanumeric characters
    for (let i = 0; i < lowerStr.length; i++) {
      let char = lowerStr[i];
      if (
        (char >= 'a' && char <= 'z') ||  // Check if it's a lowercase letter
        (char >= '0' && char <= '9')      // Check if it's a digit
      ) {
        cleanedStr += char;
      }
    }
    
    // Reverse the cleaned string
    let reversedStr = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
      reversedStr += cleanedStr[i];
    }
    
    // Compare the cleaned string with its reverse
    return cleanedStr === reversedStr;
  }
  
  // Example usage:
  let string1 = "A man, a plan, a canal: Panama";
  let string2 = "Hello, World!";
  
  console.log(`"${string1}" is a palindrome:`, isPalindrome(string1)); // true
  console.log(`"${string2}" is a palindrome:`, isPalindrome(string2)); // false
  