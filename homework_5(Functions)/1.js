"Use strict";

const arrOfNumbers = [1, 23, 2322, 3, 12, 10, 231];
const arrOfNeeded = [];

function isNumberInRange(number){
    if(number > 0 && number <= 10){
        return true;
    } else{
        return false;
    }
}

for(let j = 0; j <= arrOfNumbers.length; j++){
    if(isNumberInRange(arrOfNumbers[j])){
        arrOfNeeded.push(arrOfNumbers[j]);
    }
}
console.log(arrOfNeeded);