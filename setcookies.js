function setCookie(name, value, hoursToExpire) {
    var now = new Date();
    var expirationDate = new Date(now.getTime() + hoursToExpire * 3600 * 1000); // Convert hours to milliseconds

    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; path=/';
}

// Example usage:
setCookie('myCookie', 'exampleValue', 10); // This sets the cookie 'myCookie' with the value 'exampleValue' which expires in 10 hours