"use strict";
const firstNum = 100000, secondNum = 245;
const thirdNum = 46565, fourthNum = 1623;
let max = 0;
firstNum > secondNum
    ? max = firstNum
    : max = secondNum
if (thirdNum > max){
    max = thirdNum;
} else if(fourthNum > max){
    max = fourthNum;
}
console.log(max);