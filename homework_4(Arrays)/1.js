"use strict";
const arrayOfNumbers = [1, 2, 100, 4, 55, 6, 7, 8, 9, 10];
let i2 = arrayOfNumbers[0];
for (let i = 0; i < arrayOfNumbers.length; i++) if (i2 < arrayOfNumbers[i]) i2 = arrayOfNumbers[i];
console.log(i2);