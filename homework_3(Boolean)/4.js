"use strict";
let firstNum = 10;
let secondNum = 5;

let operator = "*";

switch(operator){
case "+":
    console.log("Результат:", firstNum + secondNum);
break;
case "-":
    console.log("Результат:", firstNum - secondNum);
break;
case "*":
    console.log("Результат:", firstNum * secondNum);
break;
case "/":
    console.log("Результат:", firstNum / secondNum);
break;
default:
    console.log("Неизвестный оператор");
break;
}