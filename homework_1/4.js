let firstNumber = 4;
let secondNumber = 21;
let thirdNumber = 263;

let avrArithmetical = (Math.abs(firstNumber**3) + Math.abs(secondNumber**3) + Math.abs(thirdNumber**3))/2;
let avrGeometrical = (Math.sqrt(firstNumber**2)+Math.sqrt(secondNumber**2)+Math.sqrt(thirdNumber**2))/2;

console.log("Среднее арифметическое: ", avrArithmetical.toFixed(2));
console.log("Среднее геометрическое: ", avrGeometrical.toFixed(2));