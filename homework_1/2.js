let number = 53;
let firstComplex = String(Math.floor(number / 10));
let secondComplex = String(number % 10);
let result = secondComplex + firstComplex;
console.log("Перевёрнутое число: ",result)