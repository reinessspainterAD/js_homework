let number = 154;
let firstNumber = Math.floor(number / 100);
let secondNumber = Math.floor((number % 100) / 10); 
let thirdNumber = Math.floor(number%10);

let multiplicationOfTheseNumbers = firstNumber * secondNumber * thirdNumber;
let sumOfTheseNumbers = firstNumber + secondNumber + thirdNumber;

console.log("Произведение: ", multiplicationOfTheseNumbers);
console.log("Сумма: ", sumOfTheseNumbers);