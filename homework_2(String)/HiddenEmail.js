"use strict";
const email = "1234567890@gmail.com";
const hiddenEmail = email.slice(0, (email.indexOf("@")/2)) + "..." + email.slice(email.indexOf("@")); 
console.log("Half Hidden Email: ", hiddenEmail);
