let numberOne = 642.23;
let numberTwo = 273.53156;
let arithmeticalMean = (numberOne + numberTwo)/2;
console.log(arithmeticalMean);
let complex = arithmeticalMean - Math.trunc(arithmeticalMean);
console.log("Дробная часть: ",complex.toFixed(4));