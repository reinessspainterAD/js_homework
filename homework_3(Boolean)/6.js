"use strict";

let a = 1;
let b = 21;
let c = 3;
let d = 1332;

let max1;
let max2;

if(a > b){
max1 = a;
} else{
max1 = b;
}

if(c > d){
max2 = c;
} else{
max2 = d;
}

if(max1 > max2){
console.log(max1);
} else{
console.log(max2);
}