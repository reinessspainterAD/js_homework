"use strict";
const currentYear = 4;
currentYear % 400 == 0 
    ? console.log("Данный год високосный")
    : currentYear % 4 == 0
    ? console.log("Данный год високосный")
    : console.log("Данный год не високосный")