"use strict";
const firstArray = [34, 44, 60, 100, 99];
const secondArray = ["Laika", "Oleg", "Buddy", "Daniel", "Nina"];
let firstResult = 0;
for (let i = 0; i < firstArray.length; i++) {
    firstResult += firstArray[i];
}
firstResult = firstResult / firstArray.length;
console.log(`Средняя оценка по студентам = ${firstResult}`);

let mark = " ";
for (let i = 0; i < secondArray.length; i++) {
    if (firstArray[i] < 60) { 
        mark = "F" }else if (firstArray[i] < 70) {
             mark = "D" } else if (firstArray[i] < 80) { 
                mark = "C" } else if (firstArray[i] < 90) {
                     mark = "B" } else if (firstArray[i] < 100) {
                        mark = "A" };
    console.log(`Оценка студента "${secondArray[i]}" = ${mark}`);
} 