// Function to get a cookie by name
function getCookie(name) {
  // Create a regular expression pattern to match the cookie name
  var nameEQ = name + "=";
  // Split document.cookie into an array of individual cookies
  var cookiesArray = document.cookie.split(";");

  // Iterate over each cookie in the cookiesArray
  for (var i = 0; i < cookiesArray.length; i++) {
    var cookie = cookiesArray[i];

    // Remove leading spaces (if any)
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }

    // Check if the cookie starts with the name we're looking for
    if (cookie.indexOf(nameEQ) == 0) {
      // If found, return the value of the cookie
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  // If the cookie with the given name is not found, return null
  return null;
}