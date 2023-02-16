"use strict";
const arrayOfNumbers = [2, 12, 0, 4, 7, 99, 6, 545, 4, 1411];
for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
        if (arrayOfNumbers[i] > arrayOfNumbers[j]) {
            let testValue = arrayOfNumbers[i];
            arrayOfNumbers[i] = arrayOfNumbers[j];
            arrayOfNumbers[j] = testValue;
        }
    }
}

console.log(arrayOfNumbers);