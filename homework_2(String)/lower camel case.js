"use strict";
const String1 = "JavaScript Exercises";
const Complex = String1[0].toLowerCase() + String1.slice(1, String1.indexOf(" ")) + String1.slice(String1.indexOf(" ")+1);
console.log(Complex);